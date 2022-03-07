import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    /* menu.addEventListener('touchstart', handleClick)
       menu.addEventListener('click', handleClick); OU */
    ['touchstart', 'click'].forEach((item) => {
      menu.addEventListener(item, handleClick);
    });
  });
}
