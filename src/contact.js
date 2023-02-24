function loadContactPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'contact');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';
  content.appendChild(heading);

  const locationSection = document.createElement('section');
  const locationHeading = document.createElement('h2');
  locationHeading.textContent = 'Location';
  const address = document.createElement('p');
  address.textContent = '99 Broadway, Somerville, MA 02145';
  const phone = document.createElement('p');
  phone.textContent = '617-776-1200';
  locationSection.appendChild(locationHeading);
  locationSection.appendChild(address);
  locationSection.appendChild(phone);
  content.appendChild(locationSection);


  const hoursSection = document.createElement('section');
  const heading2 = document.createElement('h2');
  heading2.textContent = 'Hours';

  const hoursList = document.createElement('ul');
  const sun = document.createElement('li');
  const mon = document.createElement('li');
  const tues = document.createElement('li');
  const wed = document.createElement('li');
  const thurs = document.createElement('li');
  const fri = document.createElement('li');
  const sat = document.createElement('li');

  sun.textContent = 'Sun: 10:30 am - 1:00 am';
  mon.textContent = 'Mon: 5:00 pm - 1:00 am';
  tues.textContent = 'Tue: 10:30 am - 1:00 am';
  wed.textContent = 'Wed: 10:30 am -1:00 am';
  thurs.textContent = 'Thu: 10:30 am - 1:00 am';
  fri.textContent = 'Fri: 10:30 am - 1:00 am';
  sat.textContent = 'Sat: 10:30 am - 1:00 am';

  hoursList.appendChild(sun);
  hoursList.appendChild(mon);
  hoursList.appendChild(tues);
  hoursList.appendChild(wed);
  hoursList.appendChild(thurs);
  hoursList.appendChild(fri);
  hoursList.appendChild(sat);

  hoursSection.appendChild(heading2);
  hoursSection.appendChild(hoursList);
  content.appendChild(hoursSection);

  parent.appendChild(content);
}

export default loadContactPage;
