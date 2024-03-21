function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const nextColorBtn = document.getElementById('nextColorBtn');

let color = '';
let counter = 1;
const nextColor = nextColorBtn.onclick = function(){

  color = getRandomColor();

  document.body.style.backgroundColor = color;
  document.getElementById('colorCodeText').textContent = color;
  counter++;
  sessionStorage.setItem(counter, color);
}

const previousColorBtn = document.getElementById('previousColorBtn');

previousColorBtn.onclick = function(){
  const savedColor = sessionStorage.getItem(--counter)
  if (counter <= 1){
    document.body.style.backgroundColor = savedColor;
  document.getElementById('colorCodeText').textContent = '#000000';
  } else{
    document.body.style.backgroundColor = savedColor;
    document.getElementById('colorCodeText').textContent = savedColor;
  }
}

const outputCopy = document.getElementById('clickToCopy');
const newAlert = document.getElementById('alertCopy');

const copy = outputCopy.onclick = function(){
  if(counter <= 1){
    navigator.clipboard.writeText('#000000');
    newAlert.style.opacity = 1;
    setTimeout(() => {
      const interval = setInterval(() => {
        newAlert.style.opacity = parseFloat(newAlert.style.opacity) - 0.1;

        if(newAlert.style.opacity <= 0){
          clearInterval(interval);
        }
      }, 25)
    }, 900)
  } else{
    navigator.clipboard.writeText(color);
    newAlert.style.opacity = 1;
    setTimeout(() => {
      const interval = setInterval(() => {
        newAlert.style.opacity = parseFloat(newAlert.style.opacity) - 0.1;

        if(newAlert.style.opacity <= 0){
          clearInterval(interval);
        }
      }, 25)
    }, 900)
  }
}

document.addEventListener('touchmove', function(event) {
  event = event.originalEvent || event;

  if(event.scale > 1) {
      event.preventDefault();
  }
}, false);
