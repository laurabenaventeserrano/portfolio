(function(){
var docEl=document.documentElement;
var sel='.rv, .shot, .about li .ln';
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
  document.querySelectorAll(sel).forEach(function(el){el.classList.add('in')});
}

/* No-motion path: reduced-motion, or no observer support.
   html.js is never added, so CSS resolves everything to its final state. */
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(RM||!('IntersectionObserver' in window)){ revealAll(); return }

docEl.classList.add('js');

/* Two frames, not one: the first paints the masked/offset start state,
   the second starts the transition. With a single rAF the start state is
   never painted and the browser skips straight to the end: no animation. */
requestAnimationFrame(function(){ requestAnimationFrame(function(){
  hero.classList.add('lit');
  start();
})});

function start(){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(x){
      if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target) }
    });
  },{rootMargin:'0px 0px -12% 0px'});

  var watched=Array.prototype.slice.call(document.querySelectorAll(sel));
  watched.forEach(function(el){io.observe(el)});

  /* Fail-safe: if the observer never fires, nothing below would ever appear.
     Reveal only what the visitor has actually reached: never the whole page,
     which would pre-empt every reveal further down. */
  setTimeout(function(){
    var limit=window.innerHeight;
    watched.forEach(function(el){
      if(!el.classList.contains('in')&&el.getBoundingClientRect().top<limit){
        el.classList.add('in');io.unobserve(el);
      }
    });
  },4000);

  /* section counter: 01..06, quiet wayfinding */
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

  /* scroll-linked parallax: under 8% displacement, desktop only */
  if(window.matchMedia('(min-width:761px)').matches){
    var fills=Array.prototype.slice.call(document.querySelectorAll('.shot-fill'));
    var ticking=false;
    function updateParallax(){
      var vh=window.innerHeight;
      fills.forEach(function(f){
        var r=f.parentElement.getBoundingClientRect();
        if(r.bottom<0||r.top>vh)return;
        var offset=(r.top+r.height/2-vh/2)/vh;
        var py=Math.max(-1,Math.min(1,offset))*(r.height*0.06);
        f.style.setProperty('--py',py.toFixed(1)+'px');
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
