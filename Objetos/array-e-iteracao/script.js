const carros = ['Dodge charger', 'Skyline', 'Supra']

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
})

const li = document.querySelectorAll('li');

li.forEach((item) => {item.classList.add('ativa')})

const novosCarros = carros.map((item) => {
  return 'NOVO ' + item.toUpperCase();
})

console.log(novosCarros);

const numeros = [2, 4, 6, 8, 10]
const numerosX2 = numeros.map((item) => item * 2); //quando não tem "{}" significa que tem um "return" direto na função

console.log(numeros);
console.log(numerosX2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 25
  },
  {
    nome: 'HTML 2',
    min: 10
  },  {
    nome: 'CSS 1',
    min: 5
  },  {
    nome: 'JS 1',
    min: 15
  },
]

const nomesAulas = aulas.map((aula) => {
  return aula.nome;
})

console.log(nomesAulas);

const duracaoAulas = aulas.map((aula) => {
  return aula.min;
});

//map com função externa
function nomesDasAulas(aula) {
  return aula.nome;
}
const duracaoAulas2 = aulas.map( aula =>  nomesDasAulas(aula));

console.log(duracaoAulas);
console.log(duracaoAulas2);

//o acumulador funciona salvando o valor do retorno da função a cada vez que ela é iterada
const minutosAulas = duracaoAulas.reduce((acumulador, item, index, array) => {
  return acumulador + item;
}, 0)

console.log(minutosAulas);

const listaDeNumeros = [ 10, 20, 3, 43, 78, 19]

const maiorValor = listaDeNumeros.reduce((acumulador, item) => {
  return acumulador > item ? acumulador : item
});

console.log(maiorValor)

const menorValor = listaDeNumeros.reduce((acumulador, item) => {
  return acumulador < item ? acumulador : item
});

console.log(menorValor);

const nomesAulas2 = aulas.reduce((acumulador, item, index) => {
  acumulador[index] = item.nome;
  return acumulador;
}, {});

console.log(nomesAulas2);

const listaDeFrutas = ['maça', 'Banana', 'abacate', ''];

const frutasAoContrario = listaDeFrutas.reduceRight((acumulador, item) => {
  acumulador += ' ' + item;
  return acumulador
});

console.log(frutasAoContrario);

//retorna True se existir pelo menos um dos elementos do array que dê verdadeiro no if
const temBanana = listaDeFrutas.some((item) => {
  return item.toLowerCase() === 'banana' ? true : false
});

console.log(temBanana);

//retorna False se existir pelo menos um dos elementos do array que dê falso no if
const temTodasAsFrutas = listaDeFrutas.every((fruta) => {
  return fruta;
})

console.log(temTodasAsFrutas);

const idades = [18, 40, 36, 12, 33]

const todosMaioresDeIdade = idades.every((item) => {
  return item >= 18;
})
//false pois algum dos elementos não é verdadeiro (12)
console.log(todosMaioresDeIdade);