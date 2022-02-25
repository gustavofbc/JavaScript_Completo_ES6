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


// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 200';

// const regexp = /[A-Za-z]/g;

// let i = 1;
// let regexResult;
// while( (regexResult = regexp.exec(frase)) !== null ){
//     console.log(regexResult[0]);
// }

// const resultados = frase.split(regexp)

// console.log(resultados)

// const tags = `
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>
// `

// const regexp = /<li/g;

// const resultado = tags.replace(regexp, '$& class="ativa"');
// console.log(resultado)

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`

const regexp = /(\w+@)([\w.]+)/g;
const resultado = emails.replace(regexp, function(...args) {
    if(args[2] == 'homail.com.br'){
        return args[1]+'hotmail.com.br'
    } else if(args[2] == 'ggmail.com.br'){
        return args[1]+'gmail.com.br'
    } else if(args[2] == 'oulook.com.br'){
        return args[1]+'outlook.com.br'
    } else {
        return args[0]
    }
});

console.log(resultado)