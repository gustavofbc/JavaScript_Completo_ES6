// const cliente = {
//     nome: 'Gustavo',
//     compras: 10 ,
//     email: 'gustavo@email.com'
// }

// const {nome: meuNome, email = 'teste@email.com'} = cliente;

// console.log(email)

// const frutas = ['morango', 'banama', 'maçã'];

// const [primeira, segunda, terceira] = frutas;

// console.log(terceira)

// const [primeiro, segundo, terceiro] = ['item 1', 'item 2', 'item 3']

// console.log(primeiro)


function handlekeyboard({key, keyCode}){
    console.log(key, keyCode)
}

document.addEventListener('keyup', handlekeyboard)