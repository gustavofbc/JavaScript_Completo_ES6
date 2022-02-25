// const regexp = /\w+[.-]/gi;

// const regexp1 = new RegExp('\\w', 'gi')

// const frase = "Javascript Linguagem 101";

// console.log(frase.replace(regexp1, 'x'))


// const regexp = /Java/g;
// const frase = "Javascript e Java Linguagem 101, Java";


// let i = 1
// while(regexp.test(frase)){
//     console.log(i++, regexp.lastIndex)
// }


const frase = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexp = /\w+/g;

let i = 1;
let regexResult;
while( (regexResult = regexp.exec(frase)) !== null ){
    console.log(regexResult[0]);
}