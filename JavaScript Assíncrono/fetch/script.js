// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.getElementById('buscadorDeCep');
const conteudo = document.querySelector('.conteudo');

const btnBuscar = document.querySelector('.buscar');

function searchCEP(event) {
  event.preventDefault()
  const cep = form.cep.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((response) =>  response.text())
  .then(body => {
    conteudo.innerText = body
  });

}

btnBuscar.addEventListener('click', searchCEP);
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const valorBitcoin = document.querySelector('.valorBitcoin');

setInterval(() => {
  fetch('https://blockchain.info/ticker')
  .then((response) => {
    return response.json();
  })
  .then(body => {
    // valorBitcoin.innerText = body.BRL.buy
    valorBitcoin.innerText = ("R$ " + body.BRL.buy).replace(',','.')
  })
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector('.btnProximaPiaba');
const piada = document.querySelector('.piada');

function buscarPiadaRandom() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
    return response.json()
  })
  .then(body => {
    piada.innerText = body.value
  })
}

buscarPiadaRandom();

btnProxima.addEventListener('click', buscarPiadaRandom);

