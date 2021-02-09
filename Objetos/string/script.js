// const comida = "Pizza";

// const agua = new String('Água');

// console.log(agua.length)

// const frase = "A melhor comida";

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length));

const frase = "A melhor linguagem é ";
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, ' hehehe');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('Ba'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi


console.log(transacao1.slice(1))

console.log(fruta.indexOf('na'));

const preco = 'R$ 99';
console.log(preco.padStart(10, '.'))
console.log(preco.padEnd(10, '.'))

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10))
})