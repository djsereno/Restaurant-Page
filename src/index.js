import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import './style.css';

const main = document.querySelector('main');
loadHomePage(main);

const navLinks = document.querySelectorAll('.nav-link>button');
navLinks.forEach((navLink) =>
  navLink.addEventListener('click', () => {
    navLinks.forEach((link) => link.classList.remove('active'));
    navLink.classList.add('active');

    clearContent(main);
    if (navLink.id === 'home-button') loadHomePage(main);
    if (navLink.id === 'menu-button') loadMenuPage(main);
    if (navLink.id === 'contact-button') loadContactPage(main);
  })
);

function clearContent(parent) {
  parent.innerText = '';
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
