// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { homeUnshow } from './home.js';
import { menuShow, itemsBorderLine } from './menu.js';

const menuIconElement = document.getElementById('menu-icon');

menuIconElement.addEventListener('click', ev => {
  menuIconElement.classList.toggle('clicked');
  menuShow();
  itemsBorderLine();
  homeUnshow();
});
