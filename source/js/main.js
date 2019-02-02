var navMain = document.querySelector('.nav__list');
var navOpenButton = document.querySelector('.nav__button');
var navLogo = document.querySelector('.logo__wrapper');

navMain.classList.remove("main-navigation--nojs");

navOpenButton.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navLogo.classList.add('logo__wrapper--open-menu');
    navOpenButton.classList.remove('nav__button');
    navOpenButton.classList.add('nav__button--closed');
  } else {
    navMain.classList.remove('nav--opened');
    navMain.classList.add('nav--closed');
    navOpenButton.classList.remove('nav__button--closed');
    navOpenButton.classList.add('nav__button');
    navLogo.classList.remove('logo__wrapper--open-menu');
    navLogo.classList.add('logo__wrapper');
  }
});
