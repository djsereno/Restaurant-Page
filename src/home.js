function loadHomePage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'home');

  const heading = document.createElement('h1');
  heading.textContent = 'Amazing Restaurant!';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Our food is sooooooo good!';

  content.appendChild(heading);
  content.appendChild(paragraph);

  parent.appendChild(content);
}

export default loadHomePage;
