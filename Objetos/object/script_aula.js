// const pessoa = new Object({
//   nome: "Gustavo"
// })

// console.log(pessoa);

// const carro = {
//   marca: 'Fiat',
//   rodas: 4,
//   definirMarca(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca +" buzinou";
//   },
// }

// //posso criar um outro objeto com base em um já existente com isso:
// const gol = Object.create(carro).definirMarca('Wolkswargen');

// const ferrafi = Object.create(carro).definirMarca('ferrari');

// console.log(ferrafi.buzinar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou'
//   },
//   buzinar() {
//     return 'buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }
// //adiciono funções ao objeto, alterando ele adicionando elas
// Object.assign(moto, funcaoAutomovel);

// const moto = {
//   capacte: true
// }

// // com isso eu posso tornar uma propriedade imutável em um objeto
// Object.defineProperties(moto, {
//   rodas: {
//     // value: 2,
// //não pode deletar
//     // configurable: false,
// //pode mudar o valor
//     // writable: true,
// //defino se aparecerá este método quando executar alguma função nele, tipo retornar o leght de uma Array, se é ou não obrigatório ele retornar isso (Object.keys retorna somente os enumerable: true)
//     enumerable: true,
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4
//     }
//   }
// })

// console.log(moto);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight')

// //diferente do .keys retorna os não enumerable tambem
// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ['banana', 'morango'];

// console.log(Object.getPrototypeOf(frutas));
// console.log(Array.prototype)

// const frutas1 = ['banana', 'maça'];
// const frutas2 = ['banana', 'maça'];

// const novaFruta = frutas1

// console.log(Object.is(frutas1, frutas2));
// //verifica se um objeto é igual ao outro, não a estrutura, mas se dois objetos/ variáveis referenciam a mesma coisa
// console.log(Object.is(frutas1, novaFruta));

// const carro = {
//   marca: 'Fiat',
//   modelo: 'Uno'
// }
// //impede a mudança dos valores dos itens do objeto
// Object.freeze(carro);
// carro.marca = 'honda'

// //impede a criação de novos atributos (e também não pode deletar os já existentes)
// Object.seal(carro);
// carro.portas = 4;

// //impede a criação de novos atributos mas permite deletar os já existentes
// Object.preventExtensions(carro);
// delete carro.marca;

// console.log(carro);
// console.log(Object.isFrozen(carro));
// console.log(Object.isSealed(carro));
// console.log(Object.isExtensible(carro));

const frutas = ['banana', 'goiaba'];
const frase = 'Oi frase';
const somar = function(a, b) {
  return a + b
}
const carro = {
  marca: 'ford',
  ano: 2021
}


console.log(frutas.toString())
console.log(frase.toString())
console.log(somar.toString())
console.log(carro.toString())

//verificando qual o tipo do objeto
console.log(Object.prototype.toString.call(somar));