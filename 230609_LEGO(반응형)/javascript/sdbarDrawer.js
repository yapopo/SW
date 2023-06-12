const click = document.getElementById('click');
const click2 = document.getElementById('click2');
const click3 = document.getElementById('click3');

const open = document.getElementById('open');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');

const change = document.getElementById('color');
const change2 = document.getElementById('color2');
const change3 = document.getElementById('color3');

click.addEventListener('click',function(){

  open.style.height = '276px';
  open.style.overflow = 'visible';
  click.style.color = 'rgb(255, 204, 0)'
  change.style.color = 'rgb(255, 204, 0)';

});

click2.addEventListener('click',function(){

  open2.style.height = '214px';
  open2.style.overflow = 'visible'
  click2.style.color = 'rgb(255, 204, 0)'
  change2.style.color = 'rgb(255, 204, 0)';


});

click3.addEventListener('click',function(){

  open3.style.height = '185px';
  open3.style.overflow = 'visible'
  click3.style.color = 'rgb(255, 204, 0)'
  change3.style.color = 'rgb(255, 204, 0)';


});