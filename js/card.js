import {createAdvertisement} from './main.js';

const sectionMap = document.queruSelector('.map');
// const popup = document.queruSelector('.popup');
const cardTemplate = document.querySelector('#card');

const similarAdvertisements = createAdvertisement();

similarAdvertisements.forEach((ads) => {
  const advertisementElement = cardTemplate.cloneNode(true);
  advertisementElement.queruSelector('.popup__title').textContent = ads.title;
  advertisementElement.queruSelector('.popup__text--address').textContent = ads.address;
  advertisementElement.queruSelector('.popup__text--price').textContent = ads.price;
  sectionMap.appendChild(advertisementElement);
});


