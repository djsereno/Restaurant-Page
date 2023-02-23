function loadContactPage() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'contact');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'See our contact info below.';

  content.appendChild(heading);
  content.appendChild(paragraph);

  return content;
}

export default loadContactPage;
