// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const arrayTamanhoParagrafos = [];

paragrafos.forEach((item) => {
  return arrayTamanhoParagrafos.push(item.innerText.length)
})

const total = arrayTamanhoParagrafos.reduce((acc, cur) => {
  return acc+cur
})
console.log(total);
//método do professor (bem melhor)
const paragrafos1 = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos1, (acc, cur) => {
  return acc + cur.innerText.length
}, 0);

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo){
  let elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.appendChild(document.createTextNode(conteudo));
  return elemento;
}
//método do professor (bem melhor)
function criarElemento(tag, classe, conteudo) {
  let elemento1 = document.createElement(tag);
  classe ? elemento1.classList.add(classe): null;
  conteudo ? elemento1.innerHTML = conteudo : null;
  return elemento1;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
function novoH1(conteudo){
  let elemento =  document.createElement("h1");
  elemento.classList.add('titulo');
  elemento.appendChild(document.createTextNode(conteudo));
  return elemento
}
//método do professor (MUITO MELHOR MESMO)
let criarH1 = criarElemento.bind(null, 'h1', 'titulo');