console.log(Number.isNaN())
console.log(Number.isInteger(2.2))

console.log(parseFloat('  3243.35'))
console.log(parseFloat('100.75 reais'))
console.log(parseInt('100 reais'))
console.log(parseInt(25.49))

var preco = 1999.90
console.log(preco.toFixed()) //resultado sai em formato de String

var valor = 49.48
valor = valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

console.log(valor)
console.log(Math.PI)

const aleatorio = Math.random();
console.log(Math.floor(aleatorio * 100))

const aleatorio2 = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(aleatorio2)