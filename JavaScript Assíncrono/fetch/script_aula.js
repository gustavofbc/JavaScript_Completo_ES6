// const sobre = fetch('./sobre.html');

// const div= document.createElement('div');

// sobre.then((resolucao) => {
//   return resolucao.text();
// }).then((body) => {
//   console.log(body)
//   div.innerHTML = body
//   const titulo = div.querySelector('h1');
//   document.querySelector('h1').innerText = titulo.innerText
//   console.log(titulo)
// })

// const imagem = fetch('./imagem.png');

// imagem
// .then(resolve => {
//   return resolve.blob()
// })
// .then(body => {
//   const blobURL = URL.createObjectURL(body)
//   console.log(blobURL)
//   const imagemDom = document.querySelector('img');

//   imagemDom.src = blobURL;
// })

const viacep = fetch('https://viacep.com.br/ws/68501450/json/')

viacep
.then(response => {
  console.log(response.type);
  if(response.status === 404){
    console.log('Página não existe')
  }
})