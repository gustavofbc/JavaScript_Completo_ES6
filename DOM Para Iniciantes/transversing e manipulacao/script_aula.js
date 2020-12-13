// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// // h1.outerHTML = '<p>Novo título</p>'

// // console.log(animaisLista.innerHTML)

// const lista = document.querySelector('.animais-lista');
// console.log(lista.children[lista.children.length - 1] );
// console.log(lista.querySelector('li:last-child') );

// console.log(lista.childNodes.previousSibling);


// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa')
// //movendo elementos como último filho para outro
// // animais.appendChild(titulo);

// //mover elemento filho para outro lugar dentrod o elemento pai
// contato.replaceChild(lista, titulo)

// // contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('#faq');
const clone1 = h1.cloneNode(true);

clone1.classList.add('azul');

faq.appendChild(clone1)