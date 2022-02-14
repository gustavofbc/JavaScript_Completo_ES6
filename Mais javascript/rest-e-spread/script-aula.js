// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos);
//   console.log(arguments);
//   listaArgumentos.forEach(item => {
//     console.log(item)
//   })
//   return lado * totalLados;
// }


// perimetroForma(10, 4, 'oi', 5);


// REST
// function anunciarGanhadores(premio, ...ganhadores){
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio);
//   })
// }

// anunciarGanhadores('Carro', 'Pedro', 'Maria', 'Marta', 'Beto')

// SPREAD
const ganhadores = ['Pedro', 'Maria', 'Marta', 'Beto']
function anunciarGanhadores(premio, ...ganhadores){
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio);
  })
}

anunciarGanhadores('Carro', ...ganhadores)

// SPREAD
const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes]

console.log(comidas)

// COM SPREAD
const listaNumeros = [3,4,56,67,3,1,34]
const numeroMaximo = Math.max(...listaNumeros)
console.log(numeroMaximo)

// SEM SPREAD
const numeroMaximo1 = Math.max(3,4,56,67,3,1,34)
console.log(numeroMaximo1)

const btns = document.querySelectorAll('button');
console.log(btns)

const btnsArray = [...btns]
console.log(btnsArray)