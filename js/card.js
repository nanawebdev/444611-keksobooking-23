import {createAdvertisement} from './setup.js';

const sectionMap = document.querySelector('.map');

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAdvertisements = createAdvertisement();

similarAdvertisements.forEach((ads) => {
  const advertisementElement = cardTemplate.cloneNode(true);
  advertisementElement.queruSelector('.popup__title').textContent = ads.title;
  advertisementElement.queruSelector('.popup__text--address').textContent = ads.address;
  advertisementElement.queruSelector('.popup__text--price').textContent = ads.price;
  sectionMap.appendChild(advertisementElement);
});
