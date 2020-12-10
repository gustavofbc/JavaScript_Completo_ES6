const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

// img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

// animaisLista.addEventListener('click', callbackLista);

function callbackLista(event) {
    console.log(event.currentTarget) //elemento exato que você pegou via document
    console.log(event.target) //onde você clicou a tela
    console.log(event.type)
}


const linkExterno = document.querySelector('a[href^=http]');

function handleLInkExterno(event){
    event.preventDefault(); //previno o funcionamento de um determnado elemento
    // console.log('clicou');
    console.log(this.getAttribute('href')); //referencia o elemento escolhido (this == event.currentTarget)
}

linkExterno.addEventListener('click', handleLInkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
function handleKeyboard(event){
    if(event.key == 'a'){
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
});