const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.toggle('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
  menu.classList.add('possuiAzul')
}
else {
  menu.classList.add('naoPossuiAzul')
}

menu.className += ' vermelho';
// console.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
const srcImg =img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('title')
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}`)
  }
}