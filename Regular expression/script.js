const frase = 'Bavascript';
const regexp = /a/

const fraseNova = frase.replace(regexp, 'B');

console.log(fraseNova);

// const cpf = '111.222.333-44';
// const regexpCpf = /[.-]/g
// console.log(cpf.replace(regexpCpf, ''))


const regexCep = /\d{5}[\s-]?\d{3}/g;
const ceps = 
[
'00000-000',
'00000 000',
'00000000'
];

for(cep of ceps){
    console.log(cep, cep.match(regexCep))
}


const regexcpf = /(?:\d{3}[.-]?){3}\d{2}/g;
const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000.000.000.00',
    '000000000-00',
    '00000000000'
]

for(cpf of cpfs){
    console.log(cpf, cpf.match(regexcpf))
}

const regexcnpj = /\d{2}[.-]?(?:\d{3}[.-]?){2}[/.-]?\d{4}[/.-]?\d{2}/g;
const cnpjs = [
    '00.000.000/0000-00',
    '00000000000000',
    '00-000-000-0000-00',
    '00.000.000.000000',
    '00.000.000.0000.00',
]

for(cnpj of cnpjs){
    console.log(cnpj, cnpj.match(regexcnpj))
}