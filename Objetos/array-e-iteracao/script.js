// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
//criando uma array com os elementos que achei acima
const arrayCursos = Array.from(cursos);

//uso o map pois quero uma nova array
const objetosCurso = arrayCursos.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  // o return é um obj
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
  }
})

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter( item => item > 100  )

console.log(maiorQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
});

console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
const precos = compras.map(compra => {
  // compra.preco.replace(',', '.');
  let precosTratado = compra.preco.replace(',','.').replace('R$ ', '');
  
  return parseFloat(precosTratado);
})

console.log(precos);
const totalPreco = precos.reduce( (acc, cur) => acc + cur);

console.log(totalPreco);