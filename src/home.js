function loadHomePage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'home');

  const heroGroup = document.createElement('div');
  heroGroup.classList.add('hero');
  content.appendChild(heroGroup);

  const aboutSection = document.createElement('section');
  aboutSection.setAttribute('id', 'about');
  aboutSection.setAttribute('class', 'about');

  const intro = document.createElement('h3');
  intro.textContent = 'From our Family to yours.....';
  aboutSection.appendChild(intro);

  const paragraphs = [
    'In 1989, Chef Lorenzo Reyes moved to the United States with the dream of opening a restaurant that would showcase the best of Mexican cuisine. As he worked to establish his family in their new home country, the dream had to emerge over 25 long years. But, Chef Lorenzo never let go of his vision.',
    'While working in commercial kitchens all around the Boston area, Chef Lorenzo held on to his ultimate dream of opening his own place. Every year for 25 years, he traveled to different regions of Mexico in order to study and expand his knowledge of local cooking techniques, ingredients and recipes. Over the years tasting food from all over Mexico and talking and practicing with cooks living there, including his mom and dad, aunts and uncles, Chef Lorenzo honed his culinary style to delicious perfection.',
    'Finally, after studying, sampling, and learning in-depth about all the different styles of regional Mexican cooking - and unable to deny his life-long dream any longer - he opened <strong>Rincon Mexicano</strong> in May 2014.',
    'Owned and operated by Chef Lorenzo Reyes along with his brother Ricardo, brother-in-law Andreas, and daughter Yvette, he brings all he has learned to <strong>Rincon Mexicano</strong> for your dining pleasure. ',
    'Buen Provecho!',
  ];
  paragraphs.forEach((paraText) => {
    const para = document.createElement('p');
    para.innerHTML = paraText;
    aboutSection.appendChild(para);
  });

  content.appendChild(aboutSection);
  parent.appendChild(content);
}

export default loadHomePage;
