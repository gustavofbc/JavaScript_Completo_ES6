// Adicione a classe ativo a todos os itens do menu
const itemsMenu = document.querySelectorAll('.menu a');

itemsMenu.forEach((item)=>{
  item.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach((item)=>{
  item.classList.remove('ativo');
})
itemsMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((item)=> {
  console.log(item.hasAttribute('alt'));
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', "https://github.com/gustavofbc")
console.log(linkExterno)