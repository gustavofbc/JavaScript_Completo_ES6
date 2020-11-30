// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsImage = document.querySelectorAll('li [src^=img]');
console.log(imgsImage);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('h2');
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);