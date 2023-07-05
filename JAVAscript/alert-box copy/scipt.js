document.getElementById('open-btn').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'flex';
})

function closeAlert(){
  document.getElementById('alert').style.display = 'none';
  console.log(closeAlert)
}

// document.getElementById('close-btn').addEventListener('click', closeAlert);