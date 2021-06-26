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
console.log(novosCarrosReverso);

console.log(novosCarros);
novosCarros.splice(0, 1, 'Fusca');
console.log(novosCarros);

console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2,0,2))

console.log(['item1', 'item2', 'item3', 'item4', 'item5'].fill('banana'));

const transportes1 = ['carro', 'moto'];
const transportes2 = ['avião', 'barco'];

console.log(transportes1.concat(transportes2))

const linguagens = ['html', 'css', 'js', 'php', 'js']

console.log(linguagens.includes('css'));//verifica se tem o item e retorna um boolean
console.log(linguagens.indexOf('js'));//verifica e retorna o index do primeiro item buscado no array
console.log(linguagens.lastIndexOf('js')); //verifica e retorna o index do ultimo item buscado no array

let htmlString = '<h2>Olá mundo!</h2>';

let arrayHtmlString = htmlString.split('h2'); //divide o item em elementos de um array com base no que for passado como argumento da fumção
arrayHtmlString[1] = '>Olá Gustavo!<';
let newHtmlString = arrayHtmlString.join('h1');//concatena os items do array e se passar o método vázio ele adiciona "," entre cada item concatenado
console.log(newHtmlString);

console.log(linguagens.slice(1)); //começa do item que você passou primeiro e vai até o que você passou como segundo

let copiaLinguagens = linguagens.slice();//se não passar argumentos ele copia toda o array