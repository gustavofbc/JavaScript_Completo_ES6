// 'use strict'

// function createButton(text){
//     function element() {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         return buttonElement;
//     }

//     return Object.freeze({
//         text: text,
//         element: element,
//     })
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'novo text'
// btnComprar.element = 'novo text'

// console.log(btnComprar, btnVender)

function Pessoa(nome){
    if(!(this instanceof Pessoa))
        return new Pessoa(nome);
    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
}

const designer =  Pessoa('Gustavo');

console.log(designer)