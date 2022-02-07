// const url = 'https://jsonplaceholder.typicode.com/posts/2'
// const options = {
//   method: 'HEAD',
// }

// fetch(url, options)
// .then(response => {
//   console.log(response.headers.forEach(console.log))
// })
// .then(json => console.log(json) )

const url = 'www.google.com.br';

fetch(url)
.then(response => response.text())
.then(body => {
  console.log(body)
})