/* =========================================================================
   NAVEGACION · comportamiento
   =========================================================================
   Un solo archivo para las cuatro paginas, igual que nav.css. Se carga con
   defer y no depende de main.js: los tres casos no lo tienen.

   Lo que hace y por que:
   - Toma el control de <details>. El cierre de un <details> es instantaneo
     por definicion, asi que el atributo open se retira 240ms mas tarde y en
     ese hueco cabe el wipe inverso.
   - Bloquea el scroll del documento mientras la hoja esta abierta.
   - Atrapa el foco dentro del panel: una hoja a pantalla completa que deja
     tabular por detras es una trampa para quien no ve la pantalla.
   - Decide el suelo (claro u oscuro) por lo que hay debajo de la barra.
   ========================================================================= */
(function(){
'use strict';

var d = document.getElementById('nav-d');
if(!d) return;

var bar   = d.querySelector('.nav-bar');
var panel = d.querySelector('.nav-panel');
if(!bar || !panel) return;

var RM     = matchMedia('(prefers-reduced-motion: reduce)').matches;
var CIERRE = RM ? 120 : 240;          /* el mismo numero que la transicion */

bar.setAttribute('aria-expanded', d.hasAttribute('open') ? 'true' : 'false');


/* ----------------------------------------------------------------------
   Bloqueo de scroll. position:fixed en el body y no overflow:hidden:
   overflow:hidden no sujeta nada en Safari de iOS. Se guarda la posicion
   y se devuelve al cerrar, porque fijar el body la pierde.
   ---------------------------------------------------------------------- */
var y = 0;
function bloquear(){
  y = window.scrollY || document.documentElement.scrollTop || 0;
  var b = document.body.style;
  b.position='fixed'; b.top=(-y)+'px'; b.left='0'; b.right='0'; b.width='100%';
}
function soltar(){
  var b = document.body.style;
  b.position=''; b.top=''; b.left=''; b.right=''; b.width='';
  window.scrollTo(0, y);
}


/* ----------------------------------------------------------------------
   Abrir y cerrar
   ---------------------------------------------------------------------- */
var cerrando = false;

function abrir(){
  bloquear();
  d.setAttribute('open','');
  bar.setAttribute('aria-expanded','true');
}

function cerrar(despues){
  if(cerrando || !d.hasAttribute('open')){ if(despues) despues(); return }
  cerrando = true;
  d.classList.add('is-closing');
  bar.setAttribute('aria-expanded','false');
  setTimeout(function(){
    d.removeAttribute('open');
    d.classList.remove('is-closing');
    cerrando = false;
    soltar();
    if(despues) despues();
  }, CIERRE);
}

/* Se intercepta el click del summary entero: si lo abre el navegador, el
   cierre vuelve a ser instantaneo y no hay wipe que ensenar. Enter y espacio
   sobre un <summary> disparan click, asi que el teclado queda cubierto. */
bar.addEventListener('click', function(e){
  e.preventDefault();
  if(d.hasAttribute('open')) cerrar(); else abrir();
});


/* ----------------------------------------------------------------------
   Los enlaces del panel. Primero cierra, despues navega: si navega antes,
   la hoja desaparece de golpe y el lector no ve que se cerro.
   ---------------------------------------------------------------------- */
panel.querySelectorAll('a[href]').forEach(function(a){
  a.addEventListener('click', function(e){
    /* Pestana nueva, o el lector pidiendo una el mismo: no se toca el
       evento, solo se recoge la hoja. */
    if(a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0){
      cerrar();
      return;
    }
    var href = a.getAttribute('href') || '';
    e.preventDefault();
    cerrar(function(){
      if(href.charAt(0) === '#'){
        var t = document.querySelector(href);
        if(t){ t.scrollIntoView(); }
        try{ history.replaceState(null,'',href) }catch(err){}
      }else{
        location.href = href;
      }
    });
  });
});


/* ----------------------------------------------------------------------
   Teclado: Escape cierra y devuelve el foco al control; el tabulador no
   sale del panel mientras esta abierto.
   ---------------------------------------------------------------------- */
document.addEventListener('keydown', function(e){
  if(!d.hasAttribute('open')) return;

  if(e.key === 'Escape'){
    e.preventDefault();
    cerrar(function(){ bar.focus() });
    return;
  }

  if(e.key !== 'Tab') return;
  var f = [bar].concat(Array.prototype.slice.call(
    panel.querySelectorAll('a[href],button,[tabindex]:not([tabindex="-1"])')));
  if(!f.length) return;
  var primero = f[0], ultimo = f[f.length-1];
  if(e.shiftKey && document.activeElement === primero){ e.preventDefault(); ultimo.focus() }
  else if(!e.shiftKey && document.activeElement === ultimo){ e.preventDefault(); primero.focus() }
});


/* ----------------------------------------------------------------------
   EL SUELO. Que hay justo debajo de la barra decide si la navegacion pinta
   en oscuro o en papel. Cuatro rectangulos por fotograma de scroll, y solo
   se escribe el atributo cuando cambia de verdad.

   En los casos no hay mezcla: su cabecera es oscura y el atributo se queda
   fijo en el HTML, asi que este bloque no encuentra secciones y no corre.
   ---------------------------------------------------------------------- */
var claros = Array.prototype.slice.call(
  document.querySelectorAll('.intro,.origen,.approach,.connect'));

if(claros.length){
  var pend = false, actual = '';
  function medirSuelo(){
    pend = false;
    var linea = bar.getBoundingClientRect().bottom;
    var papel = false;
    for(var i=0;i<claros.length;i++){
      var r = claros[i].getBoundingClientRect();
      if(r.top <= linea && r.bottom > linea){ papel = true; break }
    }
    var v = papel ? 'paper' : 'dark';
    if(v !== actual){ actual = v; document.documentElement.setAttribute('data-ground', v) }
  }
  function pedirSuelo(){ if(!pend){ pend = true; requestAnimationFrame(medirSuelo) } }
  addEventListener('scroll', pedirSuelo, {passive:true});
  addEventListener('resize', pedirSuelo, {passive:true});
  medirSuelo();
}


/* ----------------------------------------------------------------------
   DONDE ESTA EL LECTOR. Se observan las secciones a las que apuntan los
   propios enlaces, en la misma banda central que usa el contador, asi que
   los dos dicen siempre lo mismo. Los tres casos ya llegan marcados con
   aria-current desde su HTML y no entran aqui.
   ---------------------------------------------------------------------- */
var enlaces = Array.prototype.slice.call(d.querySelectorAll('.nav-links a'));
if(!d.querySelector('.nav-links a[aria-current="page"]') && 'IntersectionObserver' in window){
  var mapa = [];
  enlaces.forEach(function(a){
    var href = a.getAttribute('href') || '';
    var id = '';
    if(href.charAt(0) === '#') id = href.slice(1);
    else {
      var m = href.match(/^story(\d)-case-study\.html$/);
      if(m) id = 'story-' + m[1];
    }
    var el = id && document.getElementById(id);
    if(el) mapa.push({a:a, el:el});
  });

  if(mapa.length){
    var vio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(!en.isIntersecting) return;
        for(var i=0;i<mapa.length;i++){
          mapa[i].a.classList.toggle('is-current', mapa[i].el === en.target);
        }
      });
    },{rootMargin:'-45% 0px -45% 0px'});
    mapa.forEach(function(p){ vio.observe(p.el) });
  }
}

})();
