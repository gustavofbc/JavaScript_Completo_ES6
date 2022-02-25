import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.formatar('11122222201'))