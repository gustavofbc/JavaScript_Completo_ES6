import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    //define touchstart e click com argumento padrão de events caso o usuário não o defina
    if (events == undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função que observa o click fora dele;
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      /* menu.addEventListener('touchstart', handleClick)
         menu.addEventListener('click', handleClick); OU */
      this.events.forEach((item) => {
        menu.addEventListener(item, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
