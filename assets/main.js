document.addEventListener('DOMContentLoaded',function(){
  var t=document.getElementById('navtoggle');
  if(t)t.addEventListener('click',function(){document.getElementById('navlinks').classList.toggle('open')});
  document.getElementById('navlinks').addEventListener('click',function(e){
    if(e.target.tagName==='A')document.getElementById('navlinks').classList.remove('open')
  });
});