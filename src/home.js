function loadHomePage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'home');

  const heading = document.createElement('h1');
  heading.textContent = 'Rincon Mexicano';
  content.appendChild(heading);

  const slogan = document.createElement('h2');
  slogan.textContent = 'Tastes from a Little Corner of Home';
  content.appendChild(slogan);

  const aboutSection = document.createElement('section');
  aboutSection.setAttribute('id', 'about');
  aboutSection.setAttribute('class', 'about');

  const intro = document.createElement('h3');
  intro.textContent = 'From our Family to yours.....';
  const about1 = document.createElement('p');
  about1.textContent =
    'In 1989, Chef Lorenzo Reyes moved to the United States with the dream of opening a restaurant that would showcase the best of Mexican cuisine. As he worked to establish his family in their new home country, the dream had to emerge over 25 long years. But, Chef Lorenzo never let go of his vision.';
  const about2 = document.createElement('p');
  about2.textContent =
    'While working in commercial kitchens all around the Boston area, Chef Lorenzo held on to his ultimate dream of opening his own place. Every year for 25 years, he traveled to different regions of Mexico in order to study and expand his knowledge of local cooking techniques, ingredients and recipes. Over the years tasting food from all over Mexico and talking and practicing with cooks living there, including his mom and dad, aunts and uncles, Chef Lorenzo honed his culinary style to delicious perfection.';
  const about3 = document.createElement('p');
  about3.textContent =
    'Finally, after studying, sampling, and learning in-depth about all the different styles of regional Mexican cooking - and unable to deny his life-long dream any longer - he opened Rincon Mexicano in May 2014.';
  const about4 = document.createElement('p');
  about4.textContent =
    'Owned and operated by Chef Lorenzo Reyes along with his brother Ricardo, brother-in-law Andreas, and daughter Yvette, he brings all he has learned to Rincon Mexicano for your dining pleasure. ';
  const about5 = document.createElement('p');
  about5.textContent = 'Buen Provecho!';

  aboutSection.appendChild(intro);
  aboutSection.appendChild(about1);
  aboutSection.appendChild(about2);
  aboutSection.appendChild(about3);
  aboutSection.appendChild(about4);
  aboutSection.appendChild(about5);





  content.appendChild(aboutSection);

  parent.appendChild(content);
}

export default loadHomePage;
