import { enableForm, disableForm } from './formHelpers.js';
import { createPopup } from './card.js';
import { getAdsData } from './getData.js';
const TOKYO = {
  lat: 35.67833,
  lng: 139.75114,
};
const addressInput = document.querySelector('#address');
const valuesTokyo = Object.values(TOKYO).join(', ');

disableForm();

const map = L
  .map('map-canvas')
  .on('load', () => {
    enableForm();
    getAdsData();
    addressInput.value = valuesTokyo;
  })
  .setView({
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  }, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pinIcon = L.icon({
  iconUrl: './../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPin = L.marker({
  lat: TOKYO.lat,
  lng: TOKYO.lng,
},
{
  draggable: true,
  icon: pinIcon,
});

mainPin.addTo(map);

mainPin.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  const lat = latLng.lat;
  const lng = latLng.lng;
  addressInput.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
});

const resetMap = () => {
  mainPin.setLatLng({
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  });
  map.setView({
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  }, 12);
};

const commonPinIcon = L.icon({
  iconUrl: './../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderSimilarPins = (array) => {
  array.forEach((el) => {
    const lat = el.location.lat;
    const lng = el.location.lng;
    L.marker({
      lat: lat,
      lng: lng,
    },
    {
      icon: commonPinIcon,
      keepInView: true,
    })
      .bindPopup(createPopup(el))
      .addTo(map);
  });
};


export { resetMap, renderSimilarPins };
