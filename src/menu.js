function loadMenuPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'menu');

  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  content.appendChild(heading);

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

  content.appendChild(plateSection);
  content.appendChild(tacosSection);
  content.appendChild(burritosSection);

  parent.appendChild(content);
}

function generateMenuSection(headingText, subtitleText, menuItems) {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  const subtitle = document.createElement('p');
  heading.textContent = headingText;
  subtitle.textContent = subtitleText;
  section.appendChild(heading);
  section.appendChild(subtitle);

  // menuItems should be formatted as {name: [price, description]}
  const list = document.createElement('ul');
  for (const [name, [price, description]] of Object.entries(menuItems)) {
    const listItem = document.createElement('li');
    const nameItem = document.createElement('p');
    const descriptionItem = document.createElement('p');
    const costItem = document.createElement('p');

    nameItem.textContent = name;
    descriptionItem.textContent = price;
    costItem.textContent = description;

    listItem.appendChild(nameItem);
    listItem.appendChild(descriptionItem);
    listItem.appendChild(costItem);
    list.appendChild(listItem);
  }

  section.appendChild(list);

  return section;
}

export default loadMenuPage;
