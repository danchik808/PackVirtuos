let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let menu_burger = document.querySelector('.burger');
let closen = document.querySelector('.close');
let bat = document.querySelector('.nav__link');

const toggleBurger = () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
}

burger.addEventListener('click', toggleBurger);
closen.addEventListener('click', toggleBurger);

for (let i = 0; i < menuLinks.length; i++){
  const link = menuLinks[i];
  link.addEventListener('click', toggleBurger);
}
