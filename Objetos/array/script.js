const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul

const carros = new Array('fiat', 'gol', 'celta');
carros[1] = 'pálio'

console.log(carros);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

//função construtora de array
const obj = {
  0: 'Gustavo',
  1: 'Felipe',
  2: 'valor aleatório',
  length: 3
}

console.log(li);
console.log(arrayLi);

const frutas = ['Maça', 'laranja', ['banana', 'abacate']];

console.log(frutas[0].length);

//MODEIFICADORES DE ARRAY \/

console.log(instrumentos.sort());

const idades = [5, 12, 13, 27, 41, 7];

console.log(idades.sort());

const novosCarros = ['BMW', 'Skyline', 'Mercedes'];
novosCarros.unshift('Fiat')
let qntItensNoArray = novosCarros.push('Dodger charger') //retorna a quantidade e não o array em si

let retiraPrimeiroValorDaArrray = novosCarros.shift();

let retiraUltimaValorDaArrray = novosCarros.pop();


console.log(qntItensNoArray)
console.log(novosCarros);
console.log(retiraPrimeiroValorDaArrray)
console.log(retiraUltimaValorDaArrray)

let novosCarrosReverso = novosCarros.reverse();
console.log(novosCarrosReverso)