// const dom = {
//     seletor: 'li',
//     element() {
//         const elementoSelecionado = document.querySelector(this.seletor);
//         return elementoSelecionado;
//     },
//     ativar() {
//         this.element().classList.add('ativo')
//     }
// }

function dom(seletor) {
    this.element = function() {
        const elementoSelecionado = document.querySelector(seletor);
        return elementoSelecionado;
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe)
    }
}

const li = new dom('li');
const ul = new dom('ul');

const lastLi = new dom('li:last-child');
lastLi.ativar('asdasd');
 