export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    //pulo do gato: meu this é o elemento da tela que fica fora do container modal, ou seja, é meu espaço em branco.
    //event.target me retorna onde estou clicando na tela, ou seja se dentro ou fora do modal
    if (event.target === this) {
      toggleModal(event);
    }
  }

  //BOA PRÁTICA: sempre verificar se as variáveis do js existem antes de adicionar funções nelas
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
