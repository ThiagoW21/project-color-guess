const texto = document.getElementById('answer');
const score = document.getElementById('score');
const button = document.getElementById('reset-game');
const cores = document.getElementById('cores');
const mais = document.getElementById('mais');
let pontos = 0;

let adivinhaCor = '';

function geraCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

adivinhaCor = geraCor();
document.getElementById('rgb-color').innerText = `${adivinhaCor}`;

function ehCorreto(event) {
  const cor = event.target;
  if (cor.style.backgroundColor === `rgb${adivinhaCor}`) {
    texto.innerText = 'Acertou!';
    pontos += 3;
    score.innerText = `Score: ${pontos}`;
  } else {
    texto.innerText = 'Errou! Tente novamente!';
  }
}

function addItem() {
  const div = document.createElement('div');
  div.classList.add('ball');
  cores.appendChild(div);
  div.style.backgroundColor = `rgb${geraCor()}`;
  div.addEventListener('click', (event) => {
    ehCorreto(event);
  });
}

mais.addEventListener('click', addItem);

function addCores() {
  const divs = document.querySelectorAll('.ball');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].style.backgroundColor = `rgb${geraCor()}`;
  }
  adivinhaCor = geraCor();
  document.getElementById('rgb-color').innerText = `${adivinhaCor}`;
  const i = Math.floor(Math.random() * divs.length);
  console.log(divs.length);
  divs[i].style.backgroundColor = `rgb${adivinhaCor}`;
  texto.innerText = 'Escolha uma cor';
}

addCores();

const divs = document.querySelectorAll('.ball');
for (let div = 0; div < divs.length; div += 1) {
  divs[div].addEventListener('click', (event) => {
    ehCorreto(event);
  });
}

button.addEventListener('click', addCores);
