function loadContactPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'contact');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';
  content.appendChild(heading);

  const locationSection = document.createElement('section');
  const locationHeading = document.createElement('h2');
  const address = document.createElement('p');
  const phone = document.createElement('p');
  const map = document.createElement('iframe');

  locationHeading.textContent = 'Location';
  phone.textContent = '617-776-1200';
  address.textContent = '99 Broadway, Somerville, MA 02145';

  const mapAttributes = {
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11787.53065929243!2d-71.082899!3d42.387646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370da541bb861%3A0xfc9837acaa355e15!2sRincon%20Mexicano%20Somerville!5e0!3m2!1sen!2sus!4v1677221759579!5m2!1sen!2sus',
    width: '600',
    height: '450',
    style: 'border:0;',
    allowfullscreen: '',
    loading: 'lazy',
    referrerpolicy: 'no-referrer-when-downgrade',
  };
  for (const [key, value] of Object.entries(mapAttributes)) {
    map.setAttribute(key, value);
  }

  locationSection.appendChild(locationHeading);
  locationSection.appendChild(phone);
  locationSection.appendChild(address);
  locationSection.appendChild(map);
  content.appendChild(locationSection);

  const hoursSection = document.createElement('section');
  const hoursHeading = document.createElement('h2');
  hoursHeading.textContent = 'Hours';

  const hoursList = document.createElement('ul');
  const hours = [
    'Sun: 10:30 am - 1:00 am',
    'Mon: 5:00 pm - 1:00 am',
    'Tue: 10:30 am - 1:00 am',
    'Wed: 10:30 am -1:00 am',
    'Thu: 10:30 am - 1:00 am',
    'Fri: 10:30 am - 1:00 am',
    'Sat: 10:30 am - 1:00 am',
  ];
  hours.forEach((day) => {
    const listItem = document.createElement('li');
    listItem.textContent = day;
    hoursList.appendChild(listItem);
  });

  hoursSection.appendChild(hoursHeading);
  hoursSection.appendChild(hoursList);
  content.appendChild(hoursSection);

  parent.appendChild(content);
}

export default loadContactPage;
