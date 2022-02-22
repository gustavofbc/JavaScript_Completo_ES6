const frase = 'Bavascript';
const regexp = /a/

const fraseNova = frase.replace(regexp, 'B');

console.log(fraseNova);

const cpf = '111.222.333-44';
const regexpCpf = /[.-]/g
console.log(cpf.replace(regexpCpf, ''))