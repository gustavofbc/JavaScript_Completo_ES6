// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const primeiraImgTop = primeiraImg.offsetTop;

console.log(primeiraImgTop)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
var somaImgs = 0;

function somaImagens(){
    imgs.forEach((imagem) => {
        somaImgs += imagem.offsetWidth;
    })
    
    console.log(somaImgs)
}

window.onload = function() { //carrega as imagens antes do JS
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'Possui acessibilidade');
    } else {
        console.log(link, 'não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');
if(browser.matches){
    menu.classList.add('menu-mobile');
}

console.log(menu);