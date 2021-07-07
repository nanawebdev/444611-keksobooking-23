import { enableForm, disableForm } from './form.js';
import { advertisements } from './setup.js';
import { createPopup } from './card.js';

const addressInput = document.querySelector('#address');

disableForm();

const TOKYO = {
  lat: 35.67833,
  lng: 139.75114,
};

const valuesTokyo = Object.values(TOKYO).join(', ');

const map = L
  .map('map-canvas')
  .on('load', () => {
    enableForm();
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

const commonPinIcon = L.icon({
  iconUrl: './../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

advertisements.forEach((advert) => {
  const lat = advert.location.lat;
  const lng = advert.location.lng;
  L.marker({
    lat: lat,
    lng: lng,
  },
  {
    icon: commonPinIcon,
  })
    .bindPopup(createPopup(advert))
    .addTo(map);
});
