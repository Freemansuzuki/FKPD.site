document.addEventListener('DOMContentLoaded', function(){
  function toggleDrop(id){
    var el = document.getElementById(id);
    if(!el) return;
    el.classList.toggle('hidden');
    if(!el.classList.contains('hidden')){
      setTimeout(function(){ el.classList.add('hidden'); }, 6000);
    }
  }
  var b1 = document.getElementById('contact-btn');
  if(b1) b1.addEventListener('click', function(){ toggleDrop('contact-drop'); });
  var b2 = document.getElementById('contact-btn-2');
  if(b2) b2.addEventListener('click', function(){ toggleDrop('contact-drop-2'); });
  var x = document.getElementById('x-link');
  if(x) x.addEventListener('click', function(e){ e.preventDefault(); alert('سيتم إضافة رابط X لاحقاً.'); });
  var x2 = document.getElementById('x-link-2');
  if(x2) x2.addEventListener('click', function(e){ e.preventDefault(); alert('سيتم إضافة رابط X لاحقاً.'); });
});