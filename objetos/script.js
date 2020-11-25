var pessoa = {
    nome: 'Gustavo',
    idade: 28
}

console.log(pessoa.idade);

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.area(4))
console.log(quadrado.perimetro(5))

console.log(Math.random());