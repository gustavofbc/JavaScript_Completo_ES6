// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const html = document.documentElement;

function active() {
  html.classList.toggle('active');
}

setInterval(active, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

btnIniciar.addEventListener('click', iniciarTempo);
btnPausar.addEventListener('click', pausarTempo);
btnPausar.addEventListener('dblclick', resetarTempo);

let i = 1;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 1000);
  btnIniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  btnIniciar.removeAttribute('disabled');
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 1;
}
