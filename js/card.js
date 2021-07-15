import { getOrdinal } from './util.js';

const OfferTypesDict = {
  'flat' : 'Квартира',
  'bungalow' : 'Бунгало',
  'house' : 'Дом',
  'palace' : 'Дворец',
  'hotel' : 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderFeatures = (advertisementElement, features) => {
  const featureElements = advertisementElement.querySelectorAll('.popup__feature');

  featureElements.forEach((element) => {
    element.classList.add('hidden');
  });

  features.forEach((element) => {
    advertisementElement.querySelector(`.popup__feature--${element}`).classList.remove('hidden');
  });
};

const renderPhotos = (advertisementElement, links) => {
  const photoElement = advertisementElement.querySelector('.popup__photo');
  const popupPhotos = advertisementElement.querySelector('.popup__photos');

  for (let index = 0; index < links.length-1; index++) {
    const nextPhotoElement = photoElement.cloneNode();
    popupPhotos.appendChild(nextPhotoElement);
  }
  const photoElements = advertisementElement.querySelectorAll('.popup__photo');
  photoElements.forEach((element, index) => {
    element.src = links[index];
  });
};

export function createPopup(adv) {
  const advertisementElement = cardTemplate.cloneNode(true);

  advertisementElement.querySelector('.popup__title').textContent = adv.offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = adv.offer.address;
  advertisementElement.querySelector('.popup__text--price').textContent = adv.offer.price;
  advertisementElement.querySelector('.popup__type').textContent = OfferTypesDict[adv.offer.type];

  if (adv.offer.rooms && adv.offer.guests) {
    const roomOrdinal = getOrdinal(adv.offer.rooms, ['комната', 'комнаты', 'комнат']);
    const guestOrdinal = getOrdinal(adv.offer.guests, ['гостя', 'гостей', 'гостей']);
    advertisementElement.querySelector('.popup__text--capacity').textContent = `${adv.offer.rooms} ${roomOrdinal} для ${adv.offer.guests} ${guestOrdinal}`;
  }

  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${adv.offer.checkin}, выезд после ${adv.offer.checkout}`;

  if (adv.offer.features) {
    renderFeatures(advertisementElement, adv.offer.features);
  } else {
    const featureList = advertisementElement.querySelector('.popup__features');
    featureList.parentNode.removeChild(featureList);
  }

  advertisementElement.querySelector('.popup__description').textContent = adv.offer.description;
  advertisementElement.querySelector('.popup__avatar').src = adv.author.avatar;

  if (adv.offer.photos) {
    renderPhotos(advertisementElement, adv.offer.photos);
  } else {
    const photoElement = advertisementElement.querySelector('.popup__photo');
    photoElement.parentNode.removeChild(photoElement);
  }

  return advertisementElement;
}
