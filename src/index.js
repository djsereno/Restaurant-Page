import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import './style.css';
import logoImg from './assets/logo.png';
import faviconImg from './assets/favicon.png';

const main = document.querySelector('main');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav-link>button');
const homeNav = document.querySelector('#home-button');
const favicon = document.querySelector('link[rel="shortcut icon"]');

function clearContent(parent) {
  // eslint-disable-next-line no-param-reassign
  parent.innerText = '';
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

function loadPageContent(event) {
  navLinks.forEach((link) => link.classList.remove('active'));
  event.currentTarget.classList.add('active');

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  clearContent(main);
  if (event.currentTarget.id === 'logo' || event.currentTarget.id === 'home-button') {
    homeNav.classList.add('active');
    loadHomePage(main);
  }
  if (event.currentTarget.id === 'menu-button') loadMenuPage(main);
  if (event.currentTarget.id === 'contact-button') loadContactPage(main);
}

favicon.setAttribute('href', faviconImg);
logo.src = logoImg;
logo.addEventListener('click', loadPageContent);
navLinks.forEach((navLink) => navLink.addEventListener('click', loadPageContent));
loadHomePage(main);
