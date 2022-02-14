const frutas = ['Banana', 'uva', 'morango'];
const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(({headers}) => console.log(headers))


for(const fruta of frutas){
  console.log(fruta)
}

for(const char of frase){
  console.log(char)
}

const btns = document.querySelectorAll('button');

for(const btn of btns){
  btn.style.color = 'blue';
}

console.log(...btns);

const carro = {
  marca: 'honda',
  ano: 2018
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true
  }
})

for(const chave in carro){
  console.log(chave, carro[chave])
}

for(const f in frutas){
  console.log(frutas[f])
}

const btnUnico = document.querySelector('button');

const btnStyles = getComputedStyle(btnUnico)

for(const style in btnStyles) {
  console.log(`${style} : ${btnStyles[style]}`)
}


let i = 0;

do {
  console.log(i++)
} while (i <= 20)