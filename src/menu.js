function loadMenuPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.classList.add('menu');

  const plates = {
    Enchiladas: [
      '$14.99',
      'Three corn tortillas topped with Mexican sour cream & white cheese with choice of mole (mole contains peanuts) or green sauce. Choice of: Chicken or Beef',
    ],
    Quesadillas: [
      '$13.99',
      'Flour tortilla filled with Monterrey cheese with guacamole & Mexican sour cream inside. Choice of: Chicken, Beef, or Vegetarian',
    ],
    'Chiles rellenos': ['$19.99', 'Two Poblano peppers filled with ground beef & cheese.'],
    'Carne asada': ['$17.99', 'Grilled, marinated beef.'],
  };
  const plateSection = generateMenuSection(
    'Mexican Plates',
    'Served with rice & pinto refried beans',
    plates
  );
  plateSection.classList.add('orange');
  content.appendChild(plateSection);

  const tacos = {
    'Carne asada': ['$4.25', 'Marinated grilled beef'],
    Carnitas: ['$4.25', 'Slow-cooked, shredded pork'],
    Chorizo: ['$4.25', 'Spicy sausage'],
    Lengua: ['$4.25', 'Beef tongue'],
    Cabeza: ['$4.25', 'Cow head'],
  };
  const tacosSection = generateMenuSection(
    'Tacos',
    'All served with cilantro and onions. Extras: lettuce, guacamole, & cheese',
    tacos
  );
  tacosSection.classList.add('green');
  content.appendChild(tacosSection);

  const burritos = {
    Pollo: ['$13.50', 'Chicken'],
    'Carne asada': ['$13.50', 'Marinated grilled beef'],
    'Al pastor': ['$13.50', 'Marinated pork with pineapple'],
    Carnitas: ['$13.50', 'Slow-cooked, shredded pork'],
  };
  const burritosSection = generateMenuSection(
    'Burritos',
    'Served with rice, black beans, pico de gallo, guacamole, sour cream, cheese, & jalapenos',
    burritos
  );
  burritosSection.classList.add('pink');
  content.appendChild(burritosSection);

  parent.appendChild(content);
}

// menuItems should be formatted as {name: [price, description]}
function generateMenuSection(headingText, subtitleText, menuItems) {
  const section = document.createElement('section');
  const headingGroup = document.createElement('div');
  const plaqueGroup = document.createElement('div');
  const flareLeft = document.createElement('span');
  const flareRight = document.createElement('span');
  const heading = document.createElement('h2');
  const subtitle = document.createElement('p');

  section.appendChild(headingGroup);
  headingGroup.appendChild(plaqueGroup);
  headingGroup.appendChild(subtitle);
  plaqueGroup.appendChild(flareLeft);
  plaqueGroup.appendChild(heading);
  plaqueGroup.appendChild(flareRight);

  headingGroup.classList.add('heading-group');
  plaqueGroup.classList.add('plaque');
  flareLeft.classList.add('flare');
  flareRight.classList.add('flare');

  heading.textContent = headingText;
  subtitle.textContent = subtitleText;

  const list = document.createElement('ul');
  list.classList.add('leaders');
  for (const [name, [price, description]] of Object.entries(menuItems)) {
    const listItem = document.createElement('li');
    const nameItem = document.createElement('span');
    const priceItem = document.createElement('span');
    const descriptionItem = document.createElement('p');

    nameItem.textContent = name;
    nameItem.classList.add('menu-item');
    priceItem.textContent = price;
    priceItem.classList.add('price');
    descriptionItem.textContent = description;
    descriptionItem.classList.add('description');

    listItem.appendChild(nameItem);
    listItem.appendChild(priceItem);
    listItem.appendChild(descriptionItem);
    list.appendChild(listItem);
  }
  section.appendChild(list);

  return section;
}

export default loadMenuPage;
