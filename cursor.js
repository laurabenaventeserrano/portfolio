/* =========================================================================
   SISTEMA DE CURSOR · comportamiento
   =========================================================================
   Implementa "Laura Benavente - Cursor System Proposal" en JS plano. La
   propuesta esta escrita para el runtime de documentos, con React y JSX;
   aqui no hay ni build ni dependencias, asi que lo que se porta es el
   sistema, no su andamio.

   Diez formas, y la flecha es el reposo: nunca hay un fotograma sin cursor.
   ========================================================================= */
(function(){
'use strict';

/* ----------------------------------------------------------------------
   CUANDO NO
   Si no hay raton fino, no hay puntero que sustituir. Si alguien ha pedido
   menos movimiento, una forma que le persigue es justo lo contrario. En los
   dos casos se queda el cursor del sistema y este archivo no hace nada mas.
   ---------------------------------------------------------------------- */
var finoMQ   = matchMedia('(pointer: fine)');
var quietoMQ = matchMedia('(prefers-reduced-motion: reduce)');
if(!finoMQ.matches || quietoMQ.matches) return;

var raiz = document.documentElement;

/* ----------------------------------------------------------------------
   LA ESCALERA DE SUBRAYADOS
   Un color por nivel. Se envuelve palabra por palabra porque el subrayado
   entra palabra a palabra: no es un borde del bloque, es la palabra que
   tienes debajo del cursor.

   Lo que queda fuera, y por que:
   - .tw-live / .tw-static  el titular se escribe solo, letra a letra.
     Partirlo en palabras pelearia con quien lo esta escribiendo.
   - .nav-links / .nav-foot cada enlace ya vive dentro de su mascara y sube
     desde abajo; un span mas dentro rompe el recorte.
   - .lab-card__t           ya tiene su propio filete de prisma debajo.
   ---------------------------------------------------------------------- */
var NIVEL = [
  ['h1',                       'prism3'],
  ['h2',                       'prism1'],
  ['h3',                       'pink'],
  ['figcaption,.k,.lab-kind',  'prism1']
];
var FUERA = '.tw-live,.tw-static,.nav-links,.nav-foot,.lab-card__t,.story-hero,.cur-capa';
var ABRE  = 'a[href],button,summary,[role="button"]';

/* Se envuelven los nodos de texto que cuelgan directamente del bloque, no su
   textContent entero. Asi un titular partido con <br>, o con un <em> dentro,
   se parte igual en palabras y no pierde su marcado: lo que hay entre medias
   se queda donde estaba. Con textContent, cualquier titular con un solo hijo
   se quedaba sin subrayado, que es lo que le pasaba a los H1. */
function envolver(bloque, nivel){
  /* Un recorrido por los nodos de texto, no por los hijos directos: asi un
     titular con <em> dentro se subraya entero y no a medias. Lo que cuelga
     de un enlace se queda fuera: ese trozo ya tiene su propio cursor y su
     propio gesto, y dos senales para la misma palabra son ninguna. */
  var caminante = document.createTreeWalker(bloque, NodeFilter.SHOW_TEXT, {
    acceptNode: function(n){
      if(!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      var p = n.parentElement;
      if(!p || p.closest(ABRE) || p.closest(FUERA)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  var textos = [], t;
  while((t = caminante.nextNode())) textos.push(t);
  if(!textos.length) return false;
  bloque.dataset.line = nivel;
  textos.forEach(function(nodo){
    var frag = document.createDocumentFragment();
    nodo.nodeValue.split(/(\s+)/).forEach(function(trozo){
      if(!trozo) return;
      if(/^\s+$/.test(trozo)){ frag.appendChild(document.createTextNode(trozo)); return }
      var s = document.createElement('span');
      s.className = 'cur-w';
      s.textContent = trozo;
      frag.appendChild(s);
    });
    nodo.parentNode.replaceChild(frag, nodo);
  });
  return true;
}

function partirPalabras(){
  NIVEL.forEach(function(par){
    document.querySelectorAll(par[0]).forEach(function(el){
      if(el.closest(FUERA) || el.dataset.line) return;
      envolver(el, par[1]);
    });
  });
}

/* La palabra se enciende al pasar por encima y se queda encendida mientras
   este seleccionada: por eso hay dos caminos y un candado (data-fija). */
function sobrePalabra(e){
  var w = e.target.closest ? e.target.closest('.cur-w') : null;
  var bloque = w ? w.parentElement : null;
  document.querySelectorAll('.cur-w.on').forEach(function(s){
    if(s !== w && !s.dataset.fija) s.classList.remove('on');
  });
  if(w) w.classList.add('on');
}
function porSeleccion(){
  var sel = document.getSelection();
  document.querySelectorAll('.cur-w').forEach(function(s){
    var dentro = sel && !sel.isCollapsed && sel.containsNode && sel.containsNode(s, true);
    if(dentro){ s.dataset.fija = '1'; s.classList.add('on') }
    else { delete s.dataset.fija; if(!s.matches(':hover')) s.classList.remove('on') }
  });
}

/* ----------------------------------------------------------------------
   LAS FORMAS
   Trazo de 1.25px, uniones a escuadra, relleno oscuro al 55% para que la
   silueta se lea tambien sobre fotografia. Los trazados son los de la
   propuesta.
   ---------------------------------------------------------------------- */
var NS = 'http://www.w3.org/2000/svg';
function svg(w, h, vb, trazos, mueve){
  var s = document.createElementNS(NS,'svg');
  s.setAttribute('class','cur-forma');
  s.setAttribute('width',w); s.setAttribute('height',h); s.setAttribute('viewBox',vb);
  if(mueve) s.style.transform = mueve;
  trazos.forEach(function(t){
    var p = document.createElementNS(NS,'path');
    p.setAttribute('d', t.d);
    p.setAttribute('fill', t.fill !== undefined ? t.fill : 'rgba(10,10,12,.55)');
    p.setAttribute('stroke', t.stroke || 'var(--lb-accent)');
    p.setAttribute('stroke-width', t.sw || 1.25);
    p.setAttribute('stroke-linejoin','miter');
    p.setAttribute('stroke-linecap','square');
    s.appendChild(p);
  });
  return s;
}
function etiqueta(texto, x, y){
  var d = document.createElement('div');
  d.className = 'cur-lab';
  d.style.left = x + 'px'; d.style.top = y + 'px';
  d.innerHTML = '<i></i><b></b>';
  d.querySelector('b').textContent = texto;
  return d;
}

var MANO_ABIERTA = 'M4 14V9.6a1.7 1.7 0 0 1 3.4 0v3.2M7.4 12.8V7.4a1.7 1.7 0 0 1 3.4 0v5.4M10.8 12.8V7.8a1.7 1.7 0 0 1 3.4 0v5M14.2 13V9.8a1.7 1.7 0 0 1 3.4 0V17c0 4.2-2.8 7.4-6.8 7.4S4 21 4 17Z';
var MANO_PUNO   = 'M4 15.4v-3a1.7 1.7 0 0 1 3.4 0v2.2M7.4 14.6v-2.4a1.7 1.7 0 0 1 3.4 0v2.4M10.8 14.6v-2.2a1.7 1.7 0 0 1 3.4 0v2.2M14.2 15v-1.6a1.7 1.7 0 0 1 3.4 0V18c0 3.8-2.8 6.6-6.8 6.6S4 21.8 4 18Z';

var FORMAS = {
  arrow: function(){
    return [svg(18,24,'0 0 18 24',
      [{d:'M1.5 1.2 L1.5 19.4 L6.2 14.9 L9.4 22 L12.6 20.5 L9.5 13.6 L15.8 13.4 Z'}])];
  },
  open: function(st){
    var mano = svg(22,26,'0 0 22 26',
      [{d:'M7 13.5V4.2a2 2 0 0 1 4 0v8M11 12.2v-2a1.9 1.9 0 0 1 3.8 0v2M14.8 12.6v-1.4a1.9 1.9 0 0 1 3.8 0V17c0 4.2-2.6 7.8-6.9 7.8-4 0-6.6-2.4-7.4-5.6L3 15.1a1.9 1.9 0 0 1 3.3-1.8l.9 1.4'}],
      'translate(-4px,-2px)');
    if(st.abre === 'blank') return [mano, etiqueta('Open ↗',22,22)];
    if(st.abre === 'mail')  return [mano, etiqueta('Write ↗',22,22)];
    return [mano];
  },
  drag: function(st){
    return [svg(22,26,'0 0 22 26',[{d: st.pulsado ? MANO_PUNO : MANO_ABIERTA}],
      'translate(-8px,-6px)'), etiqueta(st.pulsado ? 'Dragging' : 'Drag',22,22)];
  },
  play: function(){
    return [svg(18,20,'0 0 18 20',[{d:'M2 1.5 L16 10 L2 18.5 Z',fill:'none'}],
      'translate(-9px,-10px)'), etiqueta('Play',14,14)];
  },
  zoom: function(){
    return [svg(24,24,'0 0 24 24',[
      {d:'M2.5 2.5h14v14h-14z'},
      {d:'M9.5 6.5v6M6.5 9.5h6',fill:'none'},
      {d:'M16.5 16.5l5 5',fill:'none'}],'translate(-12px,-12px)'),
      etiqueta('Zoom +',14,14)];
  },
  copy: function(st){
    return [svg(22,22,'0 0 22 22',[
      {d:'M2.5 2.5h11v11h-11z'},
      {d:'M7.5 7.5h11v11h-11z',fill:'#0A0A0C'}],'translate(-6px,-6px)'),
      etiqueta(st.copiado ? 'Copied' : 'Copy',24,22)];
  },
  wait: function(){
    var d = document.createElement('div'); d.className = 'cur-spin';
    return [d, etiqueta('Wait',14,14)];
  },
  blocked: function(){
    return [svg(22,22,'0 0 22 22',[
      {d:'M1.5 1.5h19v19h-19z'},
      {d:'M4.5 17.5 L17.5 4.5',fill:'none'}],'translate(-11px,-11px)'),
      etiqueta('Not shown',14,14)];
  },
  gallery: function(st){
    var der = st.lado === 'right';
    return [svg(22,20,'0 0 20 20',
      [{d: der ? 'M1.5 10h17M12.5 4 L18.5 10 L12.5 16' : 'M18.5 10h-17M7.5 4 L1.5 10 L7.5 16', fill:'none'}],
      'translate(-10px,-10px)'),
      etiqueta(der ? 'Next →' : '← Prev', der ? 14 : -74, 14)];
  },
  text: function(st){
    var xl = st.nivel === 'xl';
    var alto = xl ? st.cuerpo * .92 : Math.min(st.cuerpo * 1.25, 21);
    var barra = xl ? 2 : 1;
    var ancho = xl ? st.cuerpo * .3 : 7;
    var c = document.createElement('div');
    c.className = 'cur-caret';
    c.innerHTML = '<span></span><span></span><span></span>';
    var s = c.children;
    s[0].style.cssText = s[2].style.cssText = 'width:'+ancho+'px;height:'+barra+'px';
    s[1].style.cssText = 'width:'+barra+'px;height:'+alto+'px';
    /* El cursor de texto no lleva etiqueta en ningun nivel, tampoco en H1:
       el caret gigante ya dice por si solo donde estas. */
    return [c];
  }
};

/* ----------------------------------------------------------------------
   QUE CURSOR TOCA
   Primero manda un data-cursor explicito. Si no lo hay, se deduce de lo que
   el elemento es de verdad: un enlace abre, la rueda se arrastra, un texto
   se selecciona. Nada de adivinar interacciones que no existen.
   ---------------------------------------------------------------------- */
var TIER = {H1:'xl',H2:'md',H3:'h3',H4:'h3'};
/* Etiquetas de interfaz: numeros, contadores, tipos de pieza, notas de una
   linea. Son mono de 10px en mayusculas y nadie las selecciona. Antes salia
   caret sobre unas y flecha sobre otras, y la diferencia no la decidia el
   diseno sino si alguien habia escrito <p> o <span>. */
var ROTULOS = '.k,.lab-count,.lab-kind,.lab-plaque__n,.lab-nota,.lab-card__n,' +
              '.story-hero__eyebrow,.story-hero__result,.nav-head,.lab-plain';
/* El salto al contenido existe para quien navega con teclado, que no tiene
   puntero. Dibujarle una mano encima es ruido sobre algo que nadie ve. */
var SIN_CURSOR = '.skip-link';

function zonaDe(el){
  if(!el || !el.closest) return {modo:'arrow'};
  if(el.closest(SIN_CURSOR)) return {modo:'arrow'};

  var z = el.closest('[data-cursor]');
  var a = el.closest(ABRE);
  /* Gana el mas cercano al puntero, no el que se mire primero. La rueda
     entera se arrastra, pero el titulo de una tarjeta abre la pieza: si la
     zona gana siempre, el enlace de dentro nunca se anuncia. */
  if(z && a) { if(z.contains(a)) z = null; else a = null; }

  /* La rueda en fila no gira. Prometer un puno que no arrastra nada es peor
     que no prometer nada. */
  if(z && z.dataset.cursor === 'drag' && z.classList.contains('is-flat'))
    return {modo:'arrow'};

  if(z) return {modo: z.dataset.cursor, zona: z, nivel: z.dataset.tier || null};

  if(a){
    /* La flecha inclinada significa "pestana nueva" en toda la web. Solo la
       lleva quien de verdad abre una. Lo que navega en la misma pestana, lo
       que salta dentro de la pagina y el boton del menu se quedan con la
       mano sola: ya dice "esto se pulsa", que es todo lo que hay que decir.
       Antes los 29 enlaces de la portada decian "Open" y solo 10 abrian. */
    var h = a.getAttribute('href') || '';
    var abre = a.target === '_blank' ? 'blank'
             : (h.indexOf('mailto:') === 0 ? 'mail' : null);
    return {modo:'open', abre:abre};
  }

  if(el.closest('.lab-wheel')) return {modo:'drag'};
  if(el.closest(ROTULOS)) return {modo:'arrow'};
  var t = el.closest('h1,h2,h3,h4,p,li,figcaption,blockquote,dd,dt');
  if(t && t.textContent.trim())
    return {modo:'text', texto:t, nivel: TIER[t.tagName] || 'body'};
  return {modo:'arrow'};
}

/* ----------------------------------------------------------------------
   EL BUCLE
   Una capa fija, movida con transform y una sola vez por fotograma. La forma
   solo se vuelve a dibujar cuando cambia de estado, no en cada pixel.
   ---------------------------------------------------------------------- */
var capa = document.createElement('div');
capa.className = 'cur-capa';
capa.setAttribute('aria-hidden','true');
document.body.appendChild(capa);

var st = {modo:'', nivel:null, cuerpo:16, pulsado:false, copiado:false,
          lado:'right', abre:null};
var x = -100, y = -100, pendiente = false;

function dibuja(){
  capa.textContent = '';
  (FORMAS[st.modo] || FORMAS.arrow)(st).forEach(function(n){ capa.appendChild(n) });
}
function coloca(){
  pendiente = false;
  capa.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
}

document.addEventListener('pointermove', function(e){
  if(e.pointerType && e.pointerType !== 'mouse') return;
  x = e.clientX; y = e.clientY;
  if(!pendiente){ pendiente = true; requestAnimationFrame(coloca) }

  var z = zonaDe(e.target);
  var nivel = z.nivel || null, cuerpo = st.cuerpo, lado = st.lado;
  var abre = z.abre || null;

  if(z.modo === 'text' && z.texto)
    cuerpo = parseFloat(getComputedStyle(z.texto).fontSize) || 16;

  if(z.modo === 'gallery' && z.zona){
    var r = z.zona.getBoundingClientRect();
    lado = (e.clientX - r.left) > r.width/2 ? 'right' : 'left';
  }

  if(z.modo !== st.modo || nivel !== st.nivel || lado !== st.lado ||
     abre !== st.abre || Math.abs(cuerpo - st.cuerpo) > .5){
    st.modo = z.modo; st.nivel = nivel; st.lado = lado;
    st.cuerpo = cuerpo; st.abre = abre;
    dibuja();
  }
  sobrePalabra(e);
}, {passive:true, capture:true});

document.addEventListener('pointerdown', function(){
  if(st.pulsado) return;
  st.pulsado = true; if(st.modo === 'drag') dibuja();
}, {passive:true, capture:true});
addEventListener('pointerup', function(){
  if(!st.pulsado) return;
  st.pulsado = false; if(st.modo === 'drag') dibuja();
}, {passive:true});

/* Fuera de la ventana manda el sistema otra vez. */
addEventListener('blur', function(){ raiz.classList.add('cur-off') });
addEventListener('focus', function(){ raiz.classList.remove('cur-off') });
document.addEventListener('mouseleave', function(){ raiz.classList.add('cur-off') });
document.addEventListener('mouseenter', function(){ raiz.classList.remove('cur-off') });
document.addEventListener('selectionchange', porSeleccion);

/* Si el raton deja de ser fino, o alguien pide menos movimiento a mitad de
   sesion, se devuelve el cursor del sistema sin recargar. */
function revisar(){
  var ok = finoMQ.matches && !quietoMQ.matches;
  raiz.classList.toggle('cur', ok);
}
finoMQ.addEventListener('change', revisar);
quietoMQ.addEventListener('change', revisar);

partirPalabras();
dibuja();
revisar();
})();
