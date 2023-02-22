console.log('Hello World!');

const content = document.querySelector('div#content');

const heading = document.createElement('h1');
heading.textContent = 'Amazing Restaurant!';

const paragraph = document.createElement('p');
paragraph.textContent = 'Our food is sooooooo good!';

content.appendChild(heading);
content.appendChild(paragraph);
