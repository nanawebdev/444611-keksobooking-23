import {getRandomInteger, getRandomFloatNumber} from './util';
import {TIMES, TYPES, PHOTOS, LNG_BOUNDS, LAT_BOUNDS, FEATURES} from './data';

const getRandomAvatar = () => `img/avatars/user0${getRandomInteger(1, 8)}.png`;

const getRandomLocationPoint = (min, max) => getRandomFloatNumber(min, max, 5);

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

const createAdvertisement = () => {
  const randomLat = getRandomLocationPoint(LAT_BOUNDS.MIN, LAT_BOUNDS.MAX);
  const randomLng = getRandomLocationPoint(LNG_BOUNDS.MIN, LNG_BOUNDS.MAX);

  return {
    author: {
      avatar: getRandomAvatar(),
    },
    offer: {
      title: 'Самая чудная квартира в Эхо',
      address: `${randomLat}, ${randomLng}`,
      price: getRandomInteger(25000, 100000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 4),
      guest: getRandomInteger(1, 4),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArrayElements(FEATURES),
      description: 'Здесь когда то проживал сэр Макс',
      photos: getRandomArrayElements(PHOTOS),
    },
    location: {
      lat: randomLat,
      lng: randomLng,
    },
  };
};

const objectGenerator = new Array(10).fill(null).map(createAdvertisement);

objectGenerator;
