const btn = document.querySelector('button');

const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');

//dane dla każdego pola

function skrypt1(x) {
  d1.style.backgroundColor = 'hsl(' + x + ', 100%, 50%)';
}

function skrypt2(x) {
  d2.style.backgroundColor = 'hsl(' + x + ', 80%, 50%)';
}

function skrypt3(x) {
  d3.style.backgroundColor = 'hsl(' + x + ', 60%, 50%)';
}

function skrypt4(x) {
  d4.style.backgroundColor = 'hsl(' + x + ', 40%, 50%)';
}

function skrypt5(x) {
  d5.style.backgroundColor = 'hsl(' + x + ', 20%, 50%)';
}
//wywołanie funkcji

btn.addEventListener('click', function() {
  const x = parseInt(document.getElementById('x').value);
  skrypt1(x);
  skrypt2(x);
  skrypt3(x);
  skrypt4(x);
  skrypt5(x);
});