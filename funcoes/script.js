function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14
}
var total = 5 * pi();
console.log(total);

function imc(peso, altura){
    var imc = peso / (altura * altura)
    return imc;
}

console.log(imc(69, 1.74));

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu';
    } else if(cor === 'verde'){
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores.'
    }
}

console.log(corFavorita('verde'));

function mostraConsole(){
    console.log('oi');
}

addEventListener('click', mostraConsole);