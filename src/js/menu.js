const menuElement = document.getElementById('menu');
const menuItemElement = document.querySelectorAll('.menu__item');

const menuShow = () => {
  menuElement.classList.add('menu--show');
};

const itemsBorderLine = () => {
  menuItemElement.forEach((element, index) => {
    element.classList.add('menu__item--show');
  });
};

export { menuShow, itemsBorderLine };
