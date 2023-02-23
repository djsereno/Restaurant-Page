import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const main = document.querySelector('main');
loadHomePage(main);

const navLinks = document.querySelectorAll('.nav-link>button');
navLinks.forEach((navLink) =>
  navLink.addEventListener('click', () => {
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
