const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImgs = document.querySelectorAll('.animais img');
console.log(animaisImgs[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section'); //atualiza ao vivo
const gridSectionNode = document.querySelectorAll('.grid-section'); //é estático, não atualiza.

primeiraUl.classList.add('grid-section')

// console.log(gridSectionHTML[0])
// console.log(gridSectionNode[0])

gridSectionNode.forEach(function(item, index){
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML); //tranforma array like para um array

arrayGrid.forEach(function(item){
    console.log(item)
})