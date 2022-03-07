export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"]  li'); //limito que busco os "li" dentro da class
  const tabContent = document.querySelectorAll('[data-tab="content"] section'); //limito que busco os "section" dentro da class

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;

    tabContent[index].classList.add("ativo", direcao);
  }

  //verifico se os itens existem na tela antes, caso não, as funções não devem ocorrer
  if (tabMenu.length && tabContent.length) {
    //adicionar a classe ativa no primeiro elemento direto
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
