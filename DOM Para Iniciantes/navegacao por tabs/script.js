const tabMenu = document.querySelectorAll('.js-tabmenu li'); //limito que busco os "li" dentro da class
const tabContent = document.querySelectorAll('.js-tabcontent section'); //limito que busco os "section" dentro da class

//verifico se os itens existme na tela antes, caso não, as funções não devem ocorrer
if(tabMenu.length && tabContent.length){
    //adicionar a classe ativa no primeiro elemento direto
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
        tabContent.forEach( (section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })
}