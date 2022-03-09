import ScrollSuave from "./modules/scroll-suave.js";
import InitAcordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tootip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initScrollAnimacao from "./modules/scroll-animacao.js";

const options = {
  behavior: "smooth",
  block: "start",
};
const scrollSuave = new ScrollSuave(
  '[data-menu="suave"] a[href^="#"]',
  options
);
scrollSuave.init();

//note: a ordem de adição dos módulos importa
InitAcordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimacao();
