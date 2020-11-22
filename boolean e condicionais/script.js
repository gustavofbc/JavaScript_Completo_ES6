// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
if(minhaIdade > 63){
    console.log('É menor');
} else if(minhaIdade === 20){
    console.log('é igual')
} else {
    console.log('É maior')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3 pois todos dão verdadeiro e ele retorna 3 no ultimo
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';     //True
var idade = 28;         //True
var possuiDoutorado = false;    //False
var empregoFuturo;              //False
var dinheiroNaConta = 0;    //False (0 =  false)
if(nome){
    console.log('true')
} else {
    console.log('false')
}
if(idade){
    console.log('true')
} else {
    console.log('false')
}
if(possuiDoutorado){
    console.log('true')
} else {
    console.log('false')
}
if(empregoFuturo){
    console.log('true')
} else {
    console.log('false')
}
if(dinheiroNaConta){
    console.log('true')
} else {
    console.log('false')
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china){ //comparar
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { //gato não é extritamente igual a Gato (retorna o primeiro false no &&)
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { //Cão, pois entra no || e o console retorna o último valor no &&
  console.log('Gato' && 'Cão'); //retorna a ultima verdadeira se todas forem
} else {
  console.log('Falso');
}