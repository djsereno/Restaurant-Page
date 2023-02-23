import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const homePage = loadHomePage();
const menuPage = loadMenuPage();
const contactPage = loadContactPage();

document.body.appendChild(homePage);
document.body.appendChild(menuPage);
document.body.appendChild(contactPage);
