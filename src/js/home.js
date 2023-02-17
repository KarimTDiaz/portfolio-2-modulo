const homeElement = document.getElementById('home');
const wavyElement = document.getElementById('wavy');

const homeUnshow = () => {
  homeElement.children[0].classList.add('unshow-left');
  homeElement.children[1].classList.add('unshow-right');
  wavyElement.classList.add('wavy-decoration--show');
};

export { homeUnshow };
