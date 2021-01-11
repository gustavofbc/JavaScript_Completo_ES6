function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou'
    }
}

var objeto = {
    nome: 'André',
    idade: 33,
}

objeto.teste = 'isso';

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou'
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' pessoa nadou'
}

const andre = new Pessoa('André', 28);

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['cachorro', 'gato', 'gato', 'cavalo'];

const lista = document.querySelectorAll('li');
//transformando a nodeList "lista" em em Array
const listaArray1 = Array.prototype.slice.call(lista);
//ou
const listaArray2 = Array.from(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}
