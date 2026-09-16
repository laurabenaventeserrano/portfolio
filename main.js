(function(){
/* =========================================================================
   HAVING FUN WITH AI · la rueda
   =========================================================================
   TODO el contenido del lab vive aqui. Anadir un experimento es anadir una
   entrada a LAB[]: la rueda recalcula sola el paso angular, el contador y el
   progreso. No hay que duplicar markup, ni tocar CSS, ni hacer crecer la
   seccion. Con menos de tres piezas no hay cilindro que leer, asi que
   degrada a una fila.
   ========================================================================= */
var LAB = [
  { n:'01', title:'Postcard maker', kind:'Vanilla JS \u00b7 zero deps',
    video:'video/lab-postal.mp4', poster:'images/lab-postal.jpg',
    desc:'Take or upload a photo, filter it, pick a template, write the message in a handwritten face, add a stamp, and flip the card over. I wrote the brief, including the five template palettes and the type, and built it with Claude Code.',
    note:'Runs entirely in your browser. No photo ever leaves your device.',
    cta:'Play AI prototype', href:'lab/postal/' },

  { n:'02', title:'Arcana', kind:'Written logic \u00b7 no model call',
    video:'video/lab-arcana.mp4', poster:'images/lab-arcana.jpg',
    desc:'Ask one question, draw one card. The reading is composed from the card\u2019s own meaning, the shape of your question and whether the card came up reversed, so the same card answers two questions differently. English and Spanish.',
    note:'Runs in your browser. Your question is never sent anywhere.',
    cta:'Play AI prototype', href:'lab/arcana/' },

  /* ---------------------------------------------------------------------
     03 a 05 · HUECOS, NO PIEZAS.
     Repiten el video y el enlace de las dos que existen para que el
     cilindro se vea con las cinco tarjetas que ensena la propuesta. No hay
     tres experimentos mas: hay dos, dos veces y media.
     Cuando haya piezas de verdad, se sustituye la entrada entera y ya esta.
     Si en algun momento hay que ensenar solo lo real, se borran estas tres
     y la rueda se recoloca sola: con dos vuelve a centrar el par.
     --------------------------------------------------------------------- */
  { n:'03', title:'Postcard maker', kind:'Vanilla JS \u00b7 zero deps',
    video:'video/lab-postal.mp4', poster:'images/lab-postal.jpg',
    desc:'Take or upload a photo, filter it, pick a template, write the message in a handwritten face, add a stamp, and flip the card over. I wrote the brief, including the five template palettes and the type, and built it with Claude Code.',
    note:'Runs entirely in your browser. No photo ever leaves your device.',
    cta:'Play AI prototype', href:'lab/postal/' },

  { n:'04', title:'Arcana', kind:'Written logic \u00b7 no model call',
    video:'video/lab-arcana.mp4', poster:'images/lab-arcana.jpg',
    desc:'Ask one question, draw one card. The reading is composed from the card\u2019s own meaning, the shape of your question and whether the card came up reversed, so the same card answers two questions differently. English and Spanish.',
    note:'Runs in your browser. Your question is never sent anywhere.',
    cta:'Play AI prototype', href:'lab/arcana/' },

  { n:'05', title:'Postcard maker', kind:'Vanilla JS \u00b7 zero deps',
    video:'video/lab-postal.mp4', poster:'images/lab-postal.jpg',
    desc:'Take or upload a photo, filter it, pick a template, write the message in a handwritten face, add a stamp, and flip the card over. I wrote the brief, including the five template palettes and the type, and built it with Claude Code.',
    note:'Runs entirely in your browser. No photo ever leaves your device.',
    cta:'Play AI prototype', href:'lab/postal/' }
];

(function(){
var rueda  = document.getElementById('lab-wheel');
var escena = document.getElementById('lab-stage');
if(!rueda || !escena || !LAB.length) return;

var n = LAB.length, i = 0;
/* LA GEOMETRIA DEL CILINDRO, EN PROPORCIONES.
   Ancho de tarjeta, radio y perspectiva se escalan con el ancho del carril,
   asi que el cilindro se ve igual en cualquier ventana y el grupo llega
   siempre a los dos margenes. Estas cuatro cifras son las unicas que a la
   vez llenan el ancho y dejan las tres tarjetas justo sin tocarse: con 46
   grados, la central mide .4965 del carril y las laterales quedan al 54% de
   ella, escorzadas pero enteras.
   Se escriben en el CSS como --cw, --r, --persp y --wh. */
var PASO = 26;                 /* se recalcula en medirCilindro */
/* Las tres proporciones salen de resolver dos condiciones a la vez: que el
   grupo llene el carril de borde a borde y que las tres tarjetas queden
   justo sin tocarse. El calculo analitico daba la forma pero se quedaba
   corto un 12%: un plano girado bajo perspectiva es un trapecio, y su caja
   real no es el ancho por el coseno. El factor final esta medido en pantalla.
   Las tres escalan juntas, asi que el cilindro es identico a cualquier
   tamano de ventana. */
var F_ANCHO = 0.5574, F_RADIO = 0.6764, F_PERSP = 1.2204, PASO_3D = 46;
var ANCHO = 0, RADIO = 0, PERSP = 0;

function medirCilindro(){
  var C = rueda.clientWidth || 1288;
  ANCHO = C * F_ANCHO;
  RADIO = C * F_RADIO;
  PERSP = C * F_PERSP;
  PASO  = PASO_3D;
  var st = rueda.style;
  st.setProperty('--cw', ANCHO.toFixed(1) + 'px');
  st.setProperty('--r', RADIO.toFixed(1) + 'px');
  st.setProperty('--persp', PERSP.toFixed(1) + 'px');
  /* alto del carril: la figura 16/9 mas el pie */
  st.setProperty('--wh', (ANCHO * 9 / 16 + 38).toFixed(1) + 'px');
}
var mqQuieto = matchMedia('(prefers-reduced-motion: reduce)');
var mqAngosto = matchMedia('(max-width:720px)');

/* Sin cilindro: una sola pieza, pantalla estrecha o movimiento reducido.
   El encargo decia "menos de tres". Con dos piezas eso significa no ver
   nunca el carrusel, y el carrusel es la pieza. Asi que el umbral es uno y
   lo que compensa la falta de una tercera tarjeta es el giro del anillo, no
   renunciar a el. La fila sigue siendo el camino de movil y de quien pide
   menos movimiento, que es donde el encargo la necesita de verdad. */
function plano(){ return n < 2 || mqAngosto.matches || mqQuieto.matches }
/* Estrecho de verdad. No es lo mismo que plano: en escritorio con dos piezas
   la fila tambien es plana, pero ahi si hay raton y la placa la manda el
   hover, no la tarjeta que caiga en el centro. */
function angosto(){ return mqAngosto.matches }

function esc(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;') }
function pad(k){ return k < 10 ? '0'+k : String(k) }

/* -------------------------------------------------------------------- */
/* Las tarjetas                                                          */
/* -------------------------------------------------------------------- */
LAB.forEach(function(p,k){
  var c = document.createElement('div');
  c.className = 'lab-card';
  c.setAttribute('role','option');
  c.innerHTML =
    '<figure class="lab-card__f">'+
      '<video muted loop playsinline preload="none" poster="'+esc(p.poster)+'"'+
      ' aria-hidden="true" tabindex="-1"></video>'+
    '</figure>'+
    '<div class="lab-card__c">'+
      '<span class="lab-card__n">'+esc(p.n)+'</span>'+
      '<a class="lab-card__t" href="'+esc(p.href)+'" target="_blank" rel="noopener"'+
      ' aria-label="'+esc(p.title)+'. '+esc(p.kind)+'. Opens in a new tab">'+
        '<span>'+esc(p.title)+'</span>'+
        '<i class="lab-card__go">Open &#8599;</i>'+
      '</a>'+
    '</div>';
  p.el = c;
  p.v  = c.querySelector('video');
  escena.appendChild(c);
});

/* La fila se mide a partir del numero de piezas: asi ocupa exactamente lo
   que ocupan sus tarjetas y no deja un hueco donde deberia haber mas. */
var caja = document.querySelector('.lab-rueda');
if(caja) caja.style.setProperty('--lab-n', n);

var contador = document.getElementById('lab-count');
var barra    = document.getElementById('lab-bar-fill');
var tipo     = document.getElementById('lab-kind');
var pTit     = document.getElementById('lab-pt');
var pDes     = document.getElementById('lab-pd');
var pNota    = document.getElementById('lab-pn');
var pCta     = document.getElementById('lab-pcta');

/* Distancia por el camino corto: de la ultima a la primera no hay tope. */
function delta(k){
  var d = ((k - i) % n + n) % n;
  return d > n/2 ? d - n : d;
}

/* -------------------------------------------------------------------- */
/* La placa. Nunca encima del video: el texto tiene su sitio.            */
/* -------------------------------------------------------------------- */
var placaK = -1;
function placa(k){
  if(k === placaK) return;
  placaK = k;
  var p = LAB[k];
  var caja = document.getElementById('lab-plaque');
  function escribe(){
    pTit.textContent = p.title;
    pDes.textContent = p.desc;
    pNota.textContent = p.note;
    pCta.href = p.href;
    pCta.firstChild.textContent = p.cta;
    pCta.setAttribute('aria-label', p.cta + ': ' + p.title + '. Opens in a new tab');
    caja.classList.add('is-in');
  }
  /* Con el documento oculto rAF esta suspendido, y la placa se quedaria con
     el texto de la pieza anterior hasta que alguien volviera a la pestana.
     Ahi no hay transicion que proteger: se escribe y ya. */
  if(document.hidden){ escribe(); return }
  caja.classList.remove('is-in');
  /* dos fotogramas: sin el segundo el estado de partida no llega a pintarse
     y la transicion se salta entera. */
  requestAnimationFrame(function(){ requestAnimationFrame(escribe) });
}

/* -------------------------------------------------------------------- */
/* Los videos. preload="none" y poster siempre: solo la central y sus dos
   vecinas reciben src, y lo sueltan al salir de ese rango.              */
/* -------------------------------------------------------------------- */
function fuentes(){
  LAB.forEach(function(p,k){
    var cerca = Math.abs(delta(k)) <= 1;   /* solo central y vecinas cargan */
    if(cerca && !p.v.getAttribute('src')){
      p.v.setAttribute('src', p.video);
    }else if(!cerca && p.v.getAttribute('src')){
      p.v.pause(); p.v.removeAttribute('src'); p.v.load();
    }
  });
}

var enCuadro = false;
function corre(p, si){
  if(!si || !enCuadro || !p.v.getAttribute('src')){ p.v.pause(); return }
  var pr = p.v.play(); if(pr && pr.catch) pr.catch(function(){});
}

/* -------------------------------------------------------------------- */
/* Pintar                                                               */
/* -------------------------------------------------------------------- */
function pinta(){
  var llano = plano();
  rueda.classList.toggle('is-flat', llano);
  LAB.forEach(function(p,k){
    var d = delta(k), a = Math.abs(d);
    if(llano){
      p.el.style.removeProperty('--rot');
      p.el.style.opacity = '';
      p.el.style.pointerEvents = '';
      p.el.style.zIndex = '';
    }else{
      /* Solo el giro va en linea. La escala la decide el CSS a partir de
         .is-c, porque una custom property en linea gana siempre a la hoja de
         estilos y el :hover no habria podido subirla nunca. */
      /* Una posicion a cada lado, no dos. Con la tarjeta al doble de tamano
         una cuarta no cabe sin montarse encima de su vecina, y eso es justo
         lo que no puede pasar. Las piezas que no se ven siguen en la rueda:
         se llega a ellas girando, y el contador las cuenta.
         La opacidad solo tiene dos valores, 1 y 0: o la tarjeta esta o no
         esta. Lo que distingue a la central de las laterales es el brillo,
         no la transparencia, para que ninguna se vea a traves de otra. */
      p.el.style.setProperty('--rot', (d * PASO) + 'deg');
      p.el.style.opacity = a > 1 ? '0' : '1';
      p.el.style.pointerEvents = a > 1 ? 'none' : 'auto';
      p.el.style.zIndex = String(10 - a);
    }
    p.el.classList.toggle('is-c', d === 0);
    p.el.setAttribute('aria-selected', d === 0 ? 'true' : 'false');
  });
  /* EL GRUPO SE CENTRA SOLO, PARA CUALQUIER NUMERO DE PIEZAS.
     Con 3 y con 5 hay el mismo numero de tarjetas a cada lado y no hay nada
     que corregir. Con 2 y con 4 no, y el carrusel se va de lado.
     No vale con promediar donde cae el centro de cada tarjeta: las de mas
     atras se proyectan mas estrechas, asi que el centro de la caja que
     ocupan todas no coincide con la media de sus centros. Promediando se
     quedaba a 24px del centro con dos piezas y a 53px con cuatro.
     Asi que se calcula el borde real de cada una, con su escorzo y su
     perspectiva, y se centra la caja que forman entre todas. */
  if(!llano){
    var izq = Infinity, der = -Infinity;
    LAB.forEach(function(q,j){
      var e = delta(j);
      if(Math.abs(e) > 1) return;
      var th = e * PASO * Math.PI / 180;
      var cos = Math.cos(th);
      /* z de la tarjeta una vez el escenario ha retrasado el anillo */
      var z = RADIO * cos - RADIO;
      /* cuanto agranda o encoge la perspectiva a esa profundidad */
      var p = PERSP / (PERSP - z);
      var cx = RADIO * Math.sin(th) * p;
      /* el ancho en pantalla lleva su escala y su escorzo */
      var hw = (ANCHO * (e === 0 ? .97 : .88) * Math.abs(cos) / 2) * p;
      if(cx - hw < izq) izq = cx - hw;
      if(cx + hw > der) der = cx + hw;
    });
    escena.style.setProperty('--shift', (-((izq + der) / 2)).toFixed(1) + 'px');
  }else{
    escena.style.removeProperty('--shift');
  }

  contador.textContent = pad(i+1) + ' / ' + pad(n);
  barra.style.width = (((i+1)/n)*100) + '%';
  tipo.textContent = LAB[i].kind;
  placa(i);
  fuentes();
}

function vaA(k){ i = ((k % n) + n) % n; pinta() }
function gira(paso){ vaA(i + paso) }

/* -------------------------------------------------------------------- */
/* Girar: arrastre, trackpad, flechas y clic en una lateral              */
/* -------------------------------------------------------------------- */
var x0 = null, arrastrando = false;
rueda.addEventListener('pointerdown', function(e){
  if(e.target.closest('.lab-card__t')) return;   /* el titulo abre, no gira */
  x0 = e.clientX; arrastrando = false;
  rueda.setPointerCapture(e.pointerId);
});
rueda.addEventListener('pointermove', function(e){
  if(x0 === null) return;
  var dx = e.clientX - x0;
  if(Math.abs(dx) > 8) rueda.classList.add('is-drag');
  if(Math.abs(dx) >= 90){                        /* umbral: 90px */
    gira(dx < 0 ? 1 : -1);
    x0 = e.clientX; arrastrando = true;
  }
});
function suelta(e){
  if(x0 === null) return;
  x0 = null; rueda.classList.remove('is-drag');
  try{ rueda.releasePointerCapture(e.pointerId) }catch(err){}
  setTimeout(function(){ arrastrando = false }, 0);
}
rueda.addEventListener('pointerup', suelta);
rueda.addEventListener('pointercancel', suelta);

/* Trackpad. Solo el eje horizontal, y con freno: un gesto de dos dedos
   dispara decenas de eventos y la rueda se iria hasta el final. */
var ultimo = 0;
rueda.addEventListener('wheel', function(e){
  if(Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;   /* scroll vertical: suyo */
  if(Math.abs(e.deltaX) < 12) return;                   /* ruido de trackpad */
  e.preventDefault();
  var t = Date.now();
  if(t - ultimo < 420) return;
  ultimo = t;
  gira(e.deltaX > 0 ? 1 : -1);
},{passive:false});

rueda.addEventListener('keydown', function(e){
  if(e.key === 'ArrowRight'){ e.preventDefault(); gira(1) }
  else if(e.key === 'ArrowLeft'){ e.preventDefault(); gira(-1) }
  else if(e.key === 'Enter'){ e.preventDefault(); window.open(LAB[i].href,'_blank','noopener') }
});

LAB.forEach(function(p,k){
  p.el.addEventListener('click', function(e){
    if(e.target.closest('.lab-card__t')) return;
    if(arrastrando) return;
    if(delta(k) !== 0) vaA(k);
  });
  /* Al pasar por encima corre su video y la placa cuenta esa pieza. Al salir,
     la placa vuelve a la central: la descripcion nunca va sobre la imagen. */
  p.el.addEventListener('mouseenter', function(){
    if(angosto()) return;              /* en tactil no hay hover que valga */
    if(!plano() && Math.abs(delta(k)) > 1) return;
    corre(p, true);
    /* En fila no hay giro con el que chocar, asi que el hover mueve tambien
       la posicion y el contador dice la verdad. En rueda solo asoma la
       descripcion: la posicion la manda el giro. */
    if(plano()) vaA(k); else placa(k);
  });
  p.el.addEventListener('mouseleave', function(){
    if(angosto()) return;
    corre(p, false);
    if(!plano()) placa(i);
  });
  p.v.addEventListener('loadeddata', function(){
    if(p.el.matches(':hover') || (angosto() && delta(k) === 0)) corre(p, true);
  });
});

/* -------------------------------------------------------------------- */
/* En fila: la pieza que queda en el centro del viewport manda, y manda al
   tocarla, no al pasar el raton, que en un telefono no existe.          */
/* -------------------------------------------------------------------- */
if('IntersectionObserver' in window){
  var cio = new IntersectionObserver(function(es){
    if(!angosto()) return;
    es.forEach(function(en){
      if(!en.isIntersecting) return;
      var k = LAB.findIndex(function(p){ return p.el === en.target });
      if(k > -1) vaA(k);
    });
  },{root:escena, threshold:.6});
  LAB.forEach(function(p){ cio.observe(p.el) });

  /* Fuera de pantalla, todos parados. Son megabytes decodificandose para
     nadie. */
  var sec = document.getElementById('lab');
  new IntersectionObserver(function(es){
    enCuadro = es[0].isIntersecting;
    LAB.forEach(function(p,k){ corre(p, enCuadro && angosto() && delta(k) === 0) });
  },{rootMargin:'0px 0px -10% 0px'}).observe(sec);
}

medirCilindro();
mqAngosto.addEventListener('change', pinta);
mqQuieto.addEventListener('change', pinta);
addEventListener('resize', function(){
  rueda.classList.toggle('is-flat', plano());
  medirCilindro();
  pinta();
}, {passive:true});

pinta();
})();

var docEl=document.documentElement;
var sel='.rv, .shot';
var aboutSel='.about li .ln';
var hero=document.getElementById('hero');

/* El menu lo lleva nav.js, que cargan las cuatro paginas. */

function revealAll(){
  document.querySelectorAll(sel+', '+aboutSel).forEach(function(el){el.classList.add('in')});
}

/* No-motion path: reduced-motion, or no observer support.
   html.js is never added, so CSS resolves everything to its final state. */
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* LINEA PRISM. Un solo observador para todas las reglas de la pagina. Se dibuja
   una vez y se queda: no se rebobina al subir. Sin matematicas de scroll, sin
   rAF, sin libreria.
   El umbral es 0, no 0.4, y el motivo importa: la regla arranca en scaleX(0) y
   IntersectionObserver mide la caja ya transformada, asi que su area es cero y
   la proporcion de interseccion nunca pasa de 0. Con 0.4 habia reglas que no se
   dibujaban jamas. El margen negativo del 8% abajo devuelve la sensacion que
   buscaba el 0.4: la regla se dibuja al llegar a ella, no al asomar un pixel. */
var reglas=document.querySelectorAll('.prism-rule');
if(reglas.length&&'IntersectionObserver' in window){
  var pio=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('is-drawn'); pio.unobserve(en.target) }
    });
  },{threshold:0,rootMargin:'0px 0px -8% 0px'});
  reglas.forEach(function(r){ pio.observe(r) });
}

/* FROM STRATEGY TO BUILD. El scroll vertical mueve la tira en horizontal.
   Un solo listener pasivo, throttle con rAF, una lectura de geometria y una
   escritura por fotograma. Sin libreria y sin secuestrar el scroll: la rueda
   sigue haciendo lo de siempre, que es lo que separa esto de un scroll-jacking.
   En movil y con movimiento reducido el CSS deja la seccion en vertical y este
   bloque no tiene nada que mover, asi que ni se instala. */
var fsb=document.querySelector('.fsb');
if(fsb&&window.matchMedia('(min-width:861px)').matches&&
   !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  var pista=fsb.querySelector('.fsb-track');
  var pasos=Array.prototype.slice.call(fsb.querySelectorAll('.fsb-labels li'));
  var pend=false, ultimo=-1;
  function fsbPaso(){
    var r=pista.getBoundingClientRect();
    var recorrido=r.height-window.innerHeight;
    var p=recorrido>0?Math.min(1,Math.max(0,-r.top/recorrido)):0;
    fsb.style.setProperty('--lb-progress',p.toFixed(4));
    var act=Math.min(pasos.length-1,Math.floor(p*pasos.length));
    if(act!==ultimo){
      pasos.forEach(function(l,i){
        if(i===act)l.setAttribute('aria-current','step');
        else l.removeAttribute('aria-current');
      });
      ultimo=act;
    }
    pend=false;
  }
  window.addEventListener('scroll',function(){
    if(!pend){ requestAnimationFrame(fsbPaso); pend=true }
  },{passive:true});
  window.addEventListener('resize',function(){
    if(!pend){ requestAnimationFrame(fsbPaso); pend=true }
  },{passive:true});
  fsbPaso();
}

/* FILM DEL LAB. Solo corre mientras esta en cuadro: son 60 segundos y 11MB, y
   dejarlo decodificando con la seccion fuera de pantalla gasta bateria y
   fotogramas que hacen falta en el scroll.
   Va antes del return por movimiento reducido a proposito, para cubrir los dos
   caminos: si se ha pedido menos movimiento no arranca solo y aparecen los
   controles, para que el lector decida. */
function soloEnCuadro(v,margen,sinControles){
  if(!v)return;
  if(RM||!('IntersectionObserver' in window)){
    /* Con movimiento reducido no arranca solo: se queda en su poster y
       aparecen los controles, para que decida quien lee. Salvo dentro de un
       enlace: unos controles ahi son un mando interactivo metido en otro, y
       el lector no sabria si pulsa el play o abre la pieza. */
    if(!sinControles)v.controls=true;
    return;
  }
  var o=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        if(v.preload==='none'){ v.preload='auto'; v.load() }
        var pr=v.play();
        if(pr&&pr.catch)pr.catch(function(){ v.controls=true });
      }else{
        v.pause();
      }
    });
  },{rootMargin:margen});
  o.observe(v);
}

/* Un video por experimento. Van dentro del enlace que abre la pieza, asi que
   nunca llevan controles: el mando es el enlace entero. */
document.querySelectorAll('.lab-media video').forEach(function(v){
  soloEnCuadro(v,'0px 0px -15% 0px',true);
});

/* Las dos portadas con video. Margen mas holgado que el del lab: ocupan la
   pantalla entera, asi que conviene que ya esten corriendo cuando el lector
   termina de entrar en ellas. */
document.querySelectorAll('.story-hero__media video').forEach(function(v){
  soloEnCuadro(v,'0px 0px -5% 0px');
});

if(RM||!('IntersectionObserver' in window)){ revealAll(); return }

docEl.classList.add('js');

/* TYPEWRITER DE LA INTRO. Escribe las dos lineas del saludo, una detras de
   otra, y se queda quieto con el cursor parpadeando. No cicla: es una
   presentacion, no un letrero.
   Va despues del return por movimiento reducido a proposito: quien pide menos
   movimiento ve las dos frases quietas, que es el estado del HTML. */
var twL=Array.prototype.slice.call(document.querySelectorAll('.tw-l'));
var twLive=document.querySelector('.tw-live');
var twStat=document.querySelector('.tw-static');
if(twL.length&&twLive&&twStat){
  /* Reservar el alto real antes de esconder el estatico: si no, la segunda
     linea empuja la composicion al empezar a escribirse, y mas todavia cuando
     el texto parte en dos lineas en pantallas estrechas. */
  function reserva(){
    docEl.classList.remove('tw');
    var h=twStat.getBoundingClientRect().height;
    docEl.classList.add('tw');
    twLive.style.minHeight=h+'px';
  }
  reserva();
  var rt;
  window.addEventListener('resize',function(){
    clearTimeout(rt); rt=setTimeout(reserva,180);
  });

  var lineas=['Hello, I\u2019m Laura Benavente','A Senior Product Designer','building AI-native experiences'];
  var cursor=document.createElement('span');
  cursor.className='tw-cursor';
  var iL=0, iC=0;

  function escribe(){
    var t=lineas[iL];
    if(!t||!twL[iL]){ return }
    iC++;
    twL[iL].textContent=t.slice(0,iC);
    twL[iL].appendChild(cursor);
    if(iC<t.length){ setTimeout(escribe,68); return }
    iL++; iC=0;
    if(iL<lineas.length && twL[iL]){ setTimeout(escribe,520) }
  }

  twL[0].appendChild(cursor);
  setTimeout(escribe,600);
}

/* Two frames, not one: the first paints the masked/offset start state,
   the second starts the transition. With a single rAF the start state is
   never painted and the browser skips straight to the end: no animation. */
requestAnimationFrame(function(){ requestAnimationFrame(function(){
  /* El hero ya no es la primera pantalla: la intro va delante. Si lo
     encendieramos al cargar, su titular se animaria fuera de cuadro y quien
     baja lo encontraria ya puesto. Se enciende cuando entra en pantalla, con
     una comprobacion inmediata por si ya esta a la vista (pantallas altas,
     llegada directa a #hero) y un listener de scroll como segundo camino. */
  function enciendeHero(){
    if(hero.classList.contains('lit'))return;
    var r=hero.getBoundingClientRect();
    if(r.top<window.innerHeight*0.75&&r.bottom>0){
      hero.classList.add('lit');
      window.removeEventListener('scroll',enciendeHero);
    }
  }
  window.addEventListener('scroll',enciendeHero,{passive:true});
  enciendeHero();
  start();
})});

function start(){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(x){
      if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target) }
    });
  },{rootMargin:'0px 0px -22% 0px'});

  var watched=Array.prototype.slice.call(document.querySelectorAll(sel));

  /* Las tres piezas de historia se destapan mas tarde que el resto. A -22% una
     pieza de pantalla completa arranca su barrido cuando apenas asoma un quinto
     por el borde inferior, y termina de abrirse fuera de cuadro: el lector nunca
     la ve destaparse. Se disparan cuando estan de verdad dentro. */
  var tarde=Array.prototype.slice.call(document.querySelectorAll('.story-hero__media.rv'));
  if(tarde.length){
    var io2=new IntersectionObserver(function(entries){
      entries.forEach(function(x){
        if(x.isIntersecting){ x.target.classList.add('in'); io2.unobserve(x.target) }
      });
    },{rootMargin:'0px 0px -45% 0px'});
    tarde.forEach(function(el){
      io2.observe(el);
      var i=watched.indexOf(el); if(i>-1) watched.splice(i,1);
    });
  }

  watched.forEach(function(el){io.observe(el)});

  /* Fail-safe: if the observer never fires, nothing below would ever appear.
     Reveal only what the visitor has actually reached: never the whole page,
     which would pre-empt every reveal further down. */
  setTimeout(function(){
    var limit=window.innerHeight;
    watched.concat(tarde).forEach(function(el){
      if(!el.classList.contains('in')&&el.getBoundingClientRect().top<limit){
        el.classList.add('in');io.unobserve(el);
      }
    });
  },4000);

  /* section counter, quiet wayfinding. 'lab' está desactivado en el HTML:
     filter(Boolean) lo descarta y el contador queda en 05. Al reactivar la
     sección vuelve solo a 06, pero hay que subir el total del contador a mano. */
  var counterN=document.getElementById('counter-n');
  if(counterN){
    var chapters=['hero','story-1','story-2','story-3','lab','connect'];
    var chapterEls=chapters.map(function(id){return document.getElementById(id)}).filter(Boolean);
    var cio=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var idx=chapterEls.indexOf(en.target);
          if(idx>-1)counterN.textContent=String(idx+1).padStart(2,'0');
        }
      });
    },{rootMargin:'-45% 0px -45% 0px'});
    chapterEls.forEach(function(el){cio.observe(el)});
  }

  /* RESPLANDOR DEL PIE.
     DECISION APROBADA DE LAURA. NO SE TOCA. Ver styles.css e index.html.
     Crece desde el suelo durante el ultimo tramo de scroll y llega a su altura
     completa exactamente al final de la pagina. */
  var glow=document.getElementById('glow');
  if(glow){
    var minReveal=.045, gpend=false;
    function medirGlow(){
      var h=glow.offsetHeight||1;
      var queda=document.documentElement.scrollHeight-window.innerHeight-window.scrollY;
      var t=Math.max(0,Math.min(1,(h-queda)/h));
      glow.style.transform='scaleY('+(minReveal+(1-minReveal)*t)+')';
      gpend=false;
    }
    function pedirGlow(){ if(!gpend){ requestAnimationFrame(medirGlow); gpend=true } }
    window.addEventListener('scroll',pedirGlow,{passive:true});
    window.addEventListener('resize',pedirGlow,{passive:true});
    medirGlow();
  }

  /* about: cada frase entra al alcanzar su tramo de scroll dentro de la pista.
     Narrativo: el lector va conociendo una idea más a cada paso. */
  var track=document.getElementById('about-track');
  var aboutLines=Array.prototype.slice.call(document.querySelectorAll(aboutSel));
  if(track&&aboutLines.length&&window.matchMedia('(min-width:761px)').matches){
    var umbrales=[.06,.22,.38,.54,.70];
    var pend=false;
    function paso(){
      var r=track.getBoundingClientRect();
      var recorrido=r.height-window.innerHeight;
      var p=recorrido>0?Math.min(1,Math.max(0,-r.top/recorrido)):1;
      aboutLines.forEach(function(l,i){
        if(p>=(umbrales[i]!==undefined?umbrales[i]:1)) l.classList.add('in');
      });
      pend=false;
    }
    window.addEventListener('scroll',function(){
      if(!pend){ requestAnimationFrame(paso); pend=true }
    },{passive:true});
    paso();
  } else {
    aboutLines.forEach(function(l){l.classList.add('in')});
  }

  /* foco del hero: círculo que sigue al cursor con suavizado, revelando
     el mismo titular en negativo. Solo con ratón, nunca en táctil. */
  var heroW=hero, spot=document.getElementById('spot');
  if(heroW&&spot&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    var R=95, tx=0, ty=0, cx=0, cy=0, on=false, raf=null;
    function draw(){
      cx+=(tx-cx)*0.15; cy+=(ty-cy)*0.15;
      spot.style.clipPath='circle('+(on?R:0)+'px at '+cx.toFixed(1)+'px '+cy.toFixed(1)+'px)';
      if(on||Math.abs(tx-cx)>0.5||Math.abs(ty-cy)>0.5){ raf=requestAnimationFrame(draw) }
      else{ raf=null }
    }
    function kick(){ if(!raf) raf=requestAnimationFrame(draw) }
    heroW.addEventListener('pointermove',function(e){
      if(e.pointerType!=='mouse')return;
      var r=heroW.getBoundingClientRect();
      tx=e.clientX-r.left; ty=e.clientY-r.top;
      if(!on){ cx=tx; cy=ty; on=true }
      kick();
    });
    heroW.addEventListener('pointerleave',function(){ on=false; kick() });
  }

  /* SCROLL SUAVIZADO. Ni la velocidad ni la inercia del scroll se pueden tocar
     desde CSS: scroll-behavior solo afecta a los saltos por ancla. Para que la
     pagina deslice en vez de avanzar a tirones hay que interpolar la posicion
     nosotros, fotograma a fotograma.
     Escrito a mano, sin libreria, y sin transformar el documento: movemos el
     scroll real, asi que sticky, position:fixed, la barra de scroll, el teclado
     y los anclajes siguen funcionando exactamente igual. Un scroller virtual
     por transform habria roto las cuatro cosas.
     Solo con raton: en tactil el momentum del sistema ya es bueno y pelearse
     con el sale peor. Con movimiento reducido no llegamos hasta aqui. */
  if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    var destino=window.scrollY, actual=window.scrollY, animando=false;
    function tope(){
      return Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
    }
    function bucle(){
      var d=destino-actual;
      if(Math.abs(d)<0.5){ actual=destino; window.scrollTo(0,actual); animando=false; return }
      actual+=d*0.12;
      window.scrollTo(0,actual);
      requestAnimationFrame(bucle);
    }
    window.addEventListener('wheel',function(e){
      if(e.ctrlKey)return;        /* zoom del navegador */
      if(e.deltaMode!==0)return;  /* rueda por lineas o paginas: que lo lleve el sistema */
      e.preventDefault();
      destino=Math.max(0,Math.min(tope(),destino+e.deltaY));
      if(!animando){ animando=true; actual=window.scrollY; requestAnimationFrame(bucle) }
    },{passive:false});
    /* Cualquier scroll que no venga de nuestro bucle (barra, teclado, ancla,
       buscar en pagina) resincroniza el objetivo. Comparamos posiciones en vez
       de usar una bandera porque el evento scroll llega despues del scrollTo y
       una bandera ya estaria apagada. */
    window.addEventListener('scroll',function(){
      if(Math.abs(window.scrollY-actual)>2){ destino=window.scrollY; actual=window.scrollY }
    },{passive:true});
  }

  /* scroll-linked parallax: under 8% displacement, desktop only */
  if(window.matchMedia('(min-width:761px)').matches){
    var fills=Array.prototype.slice.call(document.querySelectorAll('.story-hero__media img,.story-hero__media video'));
    var ticking=false;
    /* Cada pieza se mueve a SU ritmo, no todas al mismo: es lo que separa una
       composicion de tres imagenes con parallax. La relacion entre ellas cambia
       mientras el lector baja. El ritmo va en data-rate y se queda por debajo
       del 8%. Se leen todas las geometrias antes de escribir ningun estilo,
       para no forzar un reflow por pieza en cada fotograma. */
    /* El retrato viaja en el mismo listener que el parallax: el skill pide un
       solo listener de scroll para toda la pagina, no uno por pieza. */
    var retrato=document.querySelector('.portrait__color');

    function updateParallax(){
      var vh=window.innerHeight, lecturas=[];

      if(retrato){
        var rb=retrato.getBoundingClientRect();
        if(rb.bottom>0&&rb.top<vh){
          var centro=rb.top+rb.height/2;
          /* 0 cuando el centro de la foto entra por abajo, 1 cuando llega al
             centro de la pantalla. El radio va en porcentaje de la diagonal,
             y a partir de 71% el circulo ya cubre la caja entera. */
          var pr=1-Math.max(0,Math.min(1,(centro-vh*0.5)/(vh*0.62)));
          retrato.style.setProperty('--r',(30+pr*50).toFixed(1)+'%');
        }
      }

      fills.forEach(function(f){
        var bloque=f.closest('.story-hero');
        var r=bloque.getBoundingClientRect();
        if(r.bottom<0||r.top>vh){ lecturas.push(null); return }
        var rate=parseFloat(bloque.getAttribute('data-rate'))||0.04;
        var offset=(r.top+r.height/2-vh/2)/vh;
        lecturas.push(Math.max(-1,Math.min(1,offset))*(r.height*rate));
      });
      fills.forEach(function(f,i){
        if(lecturas[i]===null)return;
        f.style.setProperty('--py',lecturas[i].toFixed(1)+'px');
      });
      ticking=false;
    }
    window.addEventListener('scroll',function(){
      if(!ticking){requestAnimationFrame(updateParallax);ticking=true}
    },{passive:true});
    updateParallax();
  }
}
})();
