// Crie uma função para verificar se um valor é Truthy
function verificarTrue(valor){
    if(!!valor){
        return 'é verdadeiro'
    } else {
        return 'é falso'
    }
}

console.log( verificarTrue(9) );

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    var perimetro = lado + lado + lado + lado;
    return perimetro;
}

console.log( perimetroQuadrado(4) )

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    var completo = nome + " " + sobrenome;
    return completo
}

console.log(nomeCompleto('Gustavo Felipe', 'Batista Carneiro'));

// Crie uma função que verifica se um número é par
function verificaPar(numero){
    if(numero % 2 == 0){
            return 'Par';
    } else {
        return 'Impar';
    }
}

console.log(verificaPar(4));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
    return (typeof dado);
}

console.log(tipoDado(1))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    return console.log('Gustavo Felipe Batista Carneiro');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);