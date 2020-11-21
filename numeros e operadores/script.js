// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var e1 = 'isso é 100';
console.log(+e1);
var e2 = 'isso não é 50';
console.log(-e2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
incremento++;
console.log(incremento);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero; // '80kg'
var pesoPorDois = (peso / 2) + unidade; // NaN (Not a Number)
console.log(pesoPorDois);