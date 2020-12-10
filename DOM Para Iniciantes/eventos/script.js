// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function adicionarClasse(event){
    event.preventDefault();
    linksInternos.forEach((item) => {
        item.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo') //pego exatamente o item clicado
}

linksInternos.forEach((item) =>{
    item.addEventListener('click', adicionarClasse)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function handleClick(event){
    console.log(event.currentTarget);
}

const todosElementos = document.querySelectorAll("body *");

todosElementos.forEach((item) => {
    item.addEventListener('click', handleClick)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function removeClick(event) {
//     console.log(event.currentTarget.remove());
// }

// const todosElementos1 = document.querySelectorAll('body *');

// todosElementos1.forEach((item) => {
//     item.addEventListener('click', removeClick)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function maximizeText(event) {
    if(event.key == 't'){
        document.documentElement.classList.toggle('textoMaior')
    }
} 

window.addEventListener('keydown', maximizeText);
