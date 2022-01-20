// const promesa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao){
//     setTimeout(() => {
//       resolve({nome: 'Gustavo', idade: 28});
//     }, 1000)
//   } else {
//     reject(Error("Um erro ocorreu na promise"))
//   }
// })

// const retorno = promesa
// .then((resolucao) => {
//   console.log(resolucao)
//   resolucao.profissao = 'estudante'
//   return resolucao;
// })
// .then(resolucao => {
//   console.log(resolucao)
// }, rejeitado => {
//   console.log(rejeitado)
// })
// .finally((teste) => {
//   console.log(teste)
// })


const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 1500)
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})