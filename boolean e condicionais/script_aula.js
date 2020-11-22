var possuiGraduacao = false;
var possuiDoutorado = true

if(possuiGraduacao){
    console.log('é verdadeiro')
} else if(possuiDoutorado) {
    console.log('Possui doutorado')
}
else{
    console.log('não possui nada')
}

var nome = '10kg' / 10;

if(nome){
    console.log(nome)
} else {
    console.log('nome não existe')
}

if(!possuiGraduacao){
    console.log('não possui graduação')
}

var x = 10
console.log(x !== 11)

if( (5-5) && (5+5) ){
    console.log('verdadeiro')
} else {
    console.log(false)
}
var condicional = (5-10) && (5+5)
if( condicional ){
    console.log('verdadeiro', condicional)
} else {
    console.log(false)
}

var condicional2 = (5-5) || (5+5) || (10 - 2);
console.log(condicional2)

var corFavorita = 'cinza';

switch (corFavorita){
    case 'cinza':
        console.log('olhe para sua vida');
        break;
    case 'amarelo': 
        console.log('olhe para o sol');
        break;
    case 'verde':
        console.log('olhe para a floresta');
        break;
    default:
        console.log('feche os olhos')
}