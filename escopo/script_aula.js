var carro = 'Fusca';
function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if(false){
    const mes = 'dezembro'
    console.log(mes);
}
// console.log(mes);

{
    var carro2 = 'Fusca2';
    const ano = 2018;
  }
  console.log(carro2); // Carro
//   console.log(ano); // erro ano is not defined
 
var i = 50;
// for (let i = 0; i < 10; i++){
//     console.log(`Número ${i}`)
// }
console.log(i * 10);

const semana = 'Sexta';
// const semana = 'quinta';

console.log(semana);

const data = {
    ano: '2020',
    mes: 'novembro',
}
data.ano = 2019; //consegue mudar
data = 'ano' // não pode mudar o tipo do dado

console.log(data);