function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const nextColorBtn = document.getElementById('nextColorBtn');

const previousColorBtn = document.getElementById('previousColorBtn');

var color;
let counter = 1;
const idk = nextColorBtn.onclick = function(){

  color = getRandomColor();

  document.body.style.backgroundColor = color;
  document.getElementById('colorCodeText').textContent = color;
  counter += 1;
  sessionStorage.setItem(counter, color);
}


previousColorBtn.onclick = function(){
  const savedColor = sessionStorage.getItem(counter - 1)

  document.body.style.backgroundColor = savedColor;
  document.getElementById('colorCodeText').textContent = savedColor;
}
