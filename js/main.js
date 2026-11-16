
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>20),{passive:true});
const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
