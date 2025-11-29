document.addEventListener('DOMContentLoaded', function(){
  const trigger = document.getElementById('contactBtn');
  const panel = document.getElementById('contactPanel');
  const sndOpen = document.getElementById('snd-open');
  const sndHover = document.getElementById('snd-hover');
  const sndClick = document.getElementById('snd-click');

  // try play open sound once on load (may be blocked)
  try{ if(sndOpen){ sndOpen.volume = 0.22; sndOpen.play().catch(()=>{}); } }catch(e){}

  let hideTimer = null;

  function showPanel(){
    if(hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    panel.classList.add('show'); panel.setAttribute('aria-hidden','false'); trigger.setAttribute('aria-expanded','true');
    if(sndClick){ sndClick.currentTime = 0; sndClick.play().catch(()=>{}); }
  }
  function scheduleHide(){
    hideTimer = setTimeout(()=>{ panel.classList.remove('show'); panel.setAttribute('aria-hidden','true'); trigger.setAttribute('aria-expanded','false'); }, 600);
  }

  trigger.addEventListener('mouseenter', ()=>{ if(sndHover){ sndHover.currentTime = 0; sndHover.play().catch(()=>{});} showPanel(); });
  trigger.addEventListener('focus', showPanel);
  trigger.addEventListener('mouseleave', scheduleHide);
  panel.addEventListener('mouseenter', ()=>{ if(hideTimer){ clearTimeout(hideTimer); hideTimer=null; } });
  panel.addEventListener('mouseleave', scheduleHide);

  document.querySelectorAll('.contact-item, .contact-trigger, .top-right a').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ if(sndHover){ sndHover.currentTime=0; sndHover.play().catch(()=>{}); } });
    el.addEventListener('click', ()=>{ if(sndClick){ sndClick.currentTime=0; sndClick.play().catch(()=>{}); } });
  });
});