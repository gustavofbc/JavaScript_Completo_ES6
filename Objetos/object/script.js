// Crie uma função que verifique
// corretamente o tipo de dado
function verifyType(item) {
  //call para mudar o contexto de 'this'
  return Object.prototype.toString.call(item);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const square = {
  sides: 4
}

Object.defineProperties(square, {
  sides: {
    // value: 4,
    writable: false,
  }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));