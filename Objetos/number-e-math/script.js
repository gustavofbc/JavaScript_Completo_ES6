// Retorne um número aleatório
// entre 1050 e 2000
let min = 1050;
let max = 2000;
let aleatorio = Math.floor(Math.random() * (max - min) + min)
console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros1 = '4, 5, 20, 8, 9';
let transfomadoEmArray = numeros1.split(', ');
console.log(Math.max(...transfomadoEmArray))

//fiz assim:
const numeros = [4, 5, 20, 8, 9];
console.log(Math.max(...numeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
                     
function limparPreco(valor){
  valor = valor.toUpperCase();
  valor = valor.replace('R$ ', '').trim();
//trim() retira os espaços em branco
  valor = +valor.replace(',', '.');
// "+" na frente transforma em número
  valor = +valor.toFixed(2);
  return valor;
}
let somaTotal = 0;
listaPrecos.forEach((preco) => {
  somaTotal += limparPreco(preco);
});

console.log(somaTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'} ));