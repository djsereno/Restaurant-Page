import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import './style.css';

const main = document.querySelector('main');
loadHomePage(main);

const homeNav = document.querySelector('#home-button');
const navLinks = document.querySelectorAll('.nav-link>button');
navLinks.forEach((navLink) => navLink.addEventListener('click', loadPageContent));
const logo = document.querySelector('.logo');
logo.addEventListener('click', loadPageContent);

function loadPageContent(event) {
  navLinks.forEach((link) => link.classList.remove('active'));
  event.currentTarget.classList.add('active');

  clearContent(main);
  if (event.currentTarget.id === 'logo') {
    homeNav.classList.add('active');
    loadHomePage(main);
  }
  if (event.currentTarget.id === 'home-button') loadHomePage(main);
  if (event.currentTarget.id === 'menu-button') loadMenuPage(main);
  if (event.currentTarget.id === 'contact-button') loadContactPage(main);
}

function clearContent(parent) {
  parent.innerText = '';
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
