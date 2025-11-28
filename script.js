// script.js — contact panel show/hide + sounds
document.addEventListener('DOMContentLoaded', function(){

  const contactBtn = document.getElementById('contact-btn');
  const panel = document.getElementById('contact-panel');
  const soundOpen = document.getElementById('sound-open');
  const soundHover = document.getElementById('sound-hover');
  const soundClick = document.getElementById('sound-click');

  // play subtle open sound once when page loads (if user gesture allows)
  try {
    if(soundOpen){
      soundOpen.volume = 0.22;
      soundOpen.play().catch(()=>{ /* autoplay blocked — fine */ });
    }
  } catch(e){}

  // show panel when mouse enters button; hide when leaves panel area
  let hideTimeout = null;

  function showPanel(){
    if(hideTimeout) { clearTimeout(hideTimeout); hideTimeout = null; }
    panel.classList.add('show');
    panel.setAttribute('aria-hidden','false');
    contactBtn.setAttribute('aria-expanded','true');
    if(soundClick){ soundClick.currentTime = 0; soundClick.volume = 0.6; soundClick.play().catch(()=>{}); }
  }

  function scheduleHide(){
    hideTimeout = setTimeout(function(){
      panel.classList.remove('show');
      panel.setAttribute('aria-hidden','true');
      contactBtn.setAttribute('aria-expanded','false');
    }, 700);
  }

  contactBtn.addEventListener('mouseenter', showPanel);
  contactBtn.addEventListener('focus', showPanel);
  contactBtn.addEventListener('mouseleave', scheduleHide);
  panel.addEventListener('mouseenter', function(){ if(hideTimeout) { clearTimeout(hideTimeout); hideTimeout = null; } });
  panel.addEventListener('mouseleave', scheduleHide);

  // play hover sound when hovering icons or nav links
  document.querySelectorAll('.contact-item, .nav-link, .icon-btn').forEach(el=>{
    el.addEventListener('mouseenter', function(){
      if(soundHover){ try{ soundHover.currentTime = 0; soundHover.volume = 0.35; soundHover.play().catch(()=>{}); }catch(e){} }
    });
    el.addEventListener('click', function(){
      if(soundClick){ try{ soundClick.currentTime = 0; soundClick.volume = 0.6; soundClick.play().catch(()=>{}); }catch(e){} }
    });
  });

});