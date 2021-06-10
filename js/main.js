const getRandomInteger = (from, to) => {
  if (from === to) {
    return;
  }

  if (from >= to || from < 0) {
    return;
  }

  return Math.floor(from + Math.random() * (to - from + 1));
};

const getRandomFloatNumber = (from, to, precision) => {
  if (from >= to || from < 0) {
    return from;
  }

  const randomNumber = from + Math.random() * (to - from);
  return parseFloat(randomNumber.toFixed(precision));
};

// временные данные

const getRandomAvatar = () => `img/avatars/user0${getRandomInteger(1, 8)}.png`;

const getRandomLocationPoint = (min, max) => getRandomFloatNumber(min, max, 5);

const getRandomAddress = () => `${getRandomLocationPoint(35.65000, 35.70000)}, ${getRandomLocationPoint(139.70000, 139.80000)}`;

const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomArrayElements = (array) => {
  const arrayCopy = array.slice();
  const randomQuantity = getRandomInteger(1, array.length);

  const randomArrayElements = [];

  while (randomArrayElements.length < randomQuantity) {
    const randomIndex = getRandomInteger(0, arrayCopy.length - 1);

    const randomElement = arrayCopy[randomIndex];

    randomArrayElements.push(randomElement);
    arrayCopy.splice(randomIndex, 1);
  }

  return randomArrayElements;
};

const createAdvertisement = () => ({
  author: {
    avatar: getRandomAvatar(),
  },
  offer: {
    title: 'Самая чудная квартира в Эхо',
    address: getRandomAddress(),
    price: getRandomInteger(25000, 100000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomInteger(1, 4),
    guest: getRandomInteger(1, 4),
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKOUTS),
    features: getRandomArrayElements(FEATURES),
    description: 'Здесь когда то проживал сэр Макс',
    photos: getRandomArrayElements(PHOTOS),
  },
  location: {
    lat: getRandomLocationPoint(35.65000, 35.70000),
    lng: getRandomLocationPoint(139.70000, 139.80000),
  },
});

createAdvertisement();
