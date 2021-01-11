function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou'
    }
    this.andar = function() {
        return 'andou pelo objeto'
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

console.log(Pessoa.prototype)
console.log(andre.prototype)

