function loadContactPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'contact');

  const phone = document.createElement('p');
  phone.classList.add('phone');
  phone.innerHTML = '•&nbsp&nbsp&nbsp617.776.1200&nbsp&nbsp&nbsp•';
  content.appendChild(phone);

  const address = document.createElement('p');
  address.classList.add('address');
  address.innerHTML = '<span>99 BROADWAY</span><span>SOMERVILLE MA 02145</span>';

  const map = document.createElement('iframe');
  const mapAttributes = {
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11787.53065929243!2d-71.082899!3d42.387646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370da541bb861%3A0xfc9837acaa355e15!2sRincon%20Mexicano%20Somerville!5e0!3m2!1sen!2sus!4v1677221759579!5m2!1sen!2sus',
    width: '500',
    height: '375',
    style: 'border:0;',
    allowfullscreen: '',
    loading: 'lazy',
    referrerpolicy: 'no-referrer-when-downgrade',
  };
  for (const [key, value] of Object.entries(mapAttributes)) {
    map.setAttribute(key, value);
  }

  content.appendChild(address);
  content.appendChild(map);

  const openHours = document.createElement('ul');
  openHours.classList.add('open-hours');
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const hours = [
    '10:30AM - 10:00PM',
    '5:00PM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
  ];
  const now = new Date();
  const today = now.getDay();
  for (let i = 0; i < days.length; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('hours');
    if (i === today) listItem.classList.add('today');

    const day = document.createElement('span');
    day.classList.add('day');
    day.textContent = days[i];
    listItem.appendChild(day);

    const hour = document.createElement('span');
    hour.classList.add('time');
    hour.textContent = hours[i];
    listItem.appendChild(hour);

    openHours.appendChild(listItem);
  }
  content.appendChild(openHours);

  parent.appendChild(content);
}

export default loadContactPage;
