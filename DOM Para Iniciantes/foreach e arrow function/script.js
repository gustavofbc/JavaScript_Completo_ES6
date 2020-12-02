// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText);
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++); //I++ é retornado direto sem consolem por isso não aparece mas funciona
console.log(i)
