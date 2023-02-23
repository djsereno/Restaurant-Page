function loadMenuPage() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'menu');

  const heading = document.createElement('h1');
  heading.textContent = 'Menu';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'See what we have to offer';

  content.appendChild(heading);
  content.appendChild(paragraph);

  return content;
}

export default loadMenuPage;
