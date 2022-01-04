export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="js-scroll"]')
  if(sections.length){

      const windowMetade = window.innerHeight * 0.6;

      function animaScroll() {
          sections.forEach((section) =>{
              const sectionTop = section.getBoundingClientRect().top;
              // verifica se exsite tamanho de tela e retorna true ou false direto no if
              const isSectionVisible = (sectionTop - windowMetade) < 0;
              if(isSectionVisible){
                  section.classList.add('ativo')
              } else {
                  section.classList.remove('ativo')
              }
          })
      }

      animaScroll(); //invoco a função para renderizar o primeiro elemento ao carregar a página

      window.addEventListener('scroll', animaScroll);
  }
}