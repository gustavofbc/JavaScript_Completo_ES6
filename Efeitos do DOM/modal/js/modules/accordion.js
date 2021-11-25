export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  
  if(accordionList.length){ //verificando se existe algum item
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);

      function activeAccordion() {
          this.classList.toggle(activeClass);
          this.nextElementSibling.classList.toggle(activeClass);
          // console.log(event.currentTarget) //selecionando o item clicado
      }

      accordionList.forEach((item) => {
          item.addEventListener('click', activeAccordion);
      });
  }
}