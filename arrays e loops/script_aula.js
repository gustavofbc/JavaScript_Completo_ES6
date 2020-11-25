// var ultimoItem = videoGames.pop();

for(let numero = 1; numero <= 4; numero++){
    console.log(numero);
}

var i = 0;

while(i < 10){
    console.log(i);
    i++;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (let item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4'){
        break;
    }  
}

videoGames.forEach(function(videogame) {
    console.log(videogame)
})

var frutas = ['banana', 'pera', 'maça', 'abacaxi', 'uva']
frutas.forEach(function(fruta, index, array){
    console.log(fruta, index, array)
})

var numero = 0;
var maximo = 50;
for(;numero < maximo;){
    console.log(numero)
    break
}