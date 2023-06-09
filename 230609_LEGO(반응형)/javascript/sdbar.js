const barIcon = document.getElementById('bar');
const sidebar = document.getElementById('sidebar');
const sdbarOverlay = document.getElementById('overlay');

console.log(barIcon,sidebar,sdbarOverlay);

barIcon.addEventListener('click', function() {

  sidebar.classList.add('is-active')
  sdbarOverlay.classList.add('is-active');

})

sdbarOverlay.addEventListener('click',function(){

  sidebar.classList.remove('is-active')
  sdbarOverlay.classList.remove('is-active');

})