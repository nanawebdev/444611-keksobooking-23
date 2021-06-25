import {advertisements} from './setup.js';
import {getOrdinal} from './util.js';
import {getActiveFeatures} from './util.js';


const map = document.querySelector('#map-canvas');

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

advertisements.forEach((ads) => {
  const advertisementElement = cardTemplate.cloneNode(true);
  advertisementElement.querySelector('.popup__title').textContent = ads.offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = ads.offer.address;
  advertisementElement.querySelector('.popup__text--price').textContent = ads.offer.price;
  if (ads.offer.type === 'flat') {
    advertisementElement.querySelector('.popup__type').textContent = 'Квартира';
  }
  if (ads.offer.type === 'bungalow') {
    advertisementElement.querySelector('.popup__type').textContent = 'Бунгало';
  }
  if (ads.offer.type === 'house') {
    advertisementElement.querySelector('.popup__type').textContent = 'Дом';
  }
  if (ads.offer.type === 'palace') {
    advertisementElement.querySelector('.popup__type').textContent = 'Дворец';
  }
  if (ads.offer.type === 'hotel') {
    advertisementElement.querySelector('.popup__type').textContent = 'Отель';
  }

  const roomOrdinal = getOrdinal(ads.offer.rooms, ['комната', 'комнаты', 'комнат']);
  const guestOrdinal = getOrdinal(ads.offer.guest, ['гостя', 'гостей', 'гостей']);
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms} ${roomOrdinal} для ${ads.offer.guest} ${guestOrdinal}`;

  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}, выезд после ${ads.offer.checkout}`;


  map.appendChild(advertisementElement);
});
