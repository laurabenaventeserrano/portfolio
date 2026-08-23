(function(){
var docEl=document.documentElement;
var sel='.rv, .shot';
var aboutSel='.about li .ln';
var hero=document.getElementById('hero');

/* nav: works with or without motion */
var navD=document.getElementById('nav-d');
if(navD){
  navD.querySelectorAll('.nav-panel a').forEach(function(a){
    a.addEventListener('click',function(){navD.removeAttribute('open')});
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&navD.hasAttribute('open')){navD.removeAttribute('open');navD.querySelector('.nav-bar').focus()}
  });
}

function revealAll(){
  document.querySelectorAll(sel+', '+aboutSel).forEach(function(el){el.classList.add('in')});
}

/* No-motion path: reduced-motion, or no observer support.
   html.js is never added, so CSS resolves everything to its final state. */
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  var lineas=['Hello, I\u2019m Laura Benavente','A Senior product Designer','based in Madrid'];
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

  /* resplandor del pie: crece desde el suelo durante el último tramo de scroll
     y llega a su altura completa exactamente al final de la página. */
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
    var fills=Array.prototype.slice.call(document.querySelectorAll('.story-hero__media img'));
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
