// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    const nomeRepassado = nome
    this.idade = idade + ' anos',
    this.andar = function() {
      return console.log(this.nome + ' andou');
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const pessoa1 = new Pessoa('João', 20);
  const pessoa2 = new Pessoa('Maria', 25);
  const pessoa3 = new Pessoa('Bruno', 15);
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  function dom(elements) {
    const elementosSelecionados = document.querySelectorAll(elements);
    this.elements = elementosSelecionados;
    this.addClass = function(classe) {
        elementosSelecionados.forEach(element => {
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe) {
        elementosSelecionados.forEach(element => {
            element.classList.remove(classe)
        })
    }
  }
  
  const lis = new dom('li');