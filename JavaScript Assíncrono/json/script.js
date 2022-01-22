// fetch('./dados.json')
// .then(response => response.json())
// .then(body => {
//   body.forEach(materia => {
//     console.log(materia.tempo)
//   })
// })

fetch('./dados.json')
.then(response => response.text())
.then(body => {
    const jsonFinal = JSON.parse(body)
    // console.log(jsonFinal)
})

const configuracoes = {
  player: "google",
  tempo: 25.5,
  aula: "2.1 javascrip"
}

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parse(localStorage.config))
