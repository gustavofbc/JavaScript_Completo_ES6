// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('dt');
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDd = document.querySelector('dd');
console.log(primeiroDd);

// ou
// const faq = document.querySelector('.faq');
// const primeiroDt = faq.querySelector('dt')
// const primeiroDd = primeiroDt.nextElementSibling;
// console.log(primeiroDt);
// console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

//alterno o conteúdo html direto
faq.innerHTML = animais.innerHTML

console.log(faq);