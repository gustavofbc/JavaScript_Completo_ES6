// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome =sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + " " + this.sobrenome;
}

const gustavo = new Pessoa('Gustavo', 'Felipe Batista Carneiro', 21)
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

const node = NodeList.prototype;
console.log(node);

const html = HTMLCollection.prototype;
console.log(html);

const doc = Document.prototype;
console.log(doc);

//ou também posso fazer assim:

// const node1 = Object.getOwnPropertyNames(NodeList);
// const html1 = Object.getOwnPropertyNames(HTMLCollection);
// const doc1 = Object.getOwnPropertyNames(Document);
// console.log(node1);
// console.log(html1);
// console.log(doc1);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name);
li.click;
console.log(li.click.constructor.name);
li.innerText;
console.log(li.innerText.constructor.name);
li.value;
console.log(li.value.constructor.name)
li.hidden;
console.log(li.hidden.constructor.name)
li.offsetLeft;
console.log(li.offsetLeft.constructor.name)
li.click();
console.log(li.click().constructor.name)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //pegadinha, não é um boolean, é uma String!
//String!
