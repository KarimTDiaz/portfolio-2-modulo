// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const menuIconElement = document.getElementById('menu-icon');

menuIconElement.addEventListener('click', () => {
  menuIconElement.classList.toggle('clicked');
});
