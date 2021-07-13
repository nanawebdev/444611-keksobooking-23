import { enableForm, disableForm } from './form-helpers.js';
import { createPopup } from './card.js';
import { getAdsData } from './render-pins.js';

const ADS_COUNT = 10;

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

let markers = [];

const renderPins = (array) => {
  // удаляем старые маркеры с карты
  markers.forEach((marker) => {
    marker.removeFrom(map);
  });
  // Чистим массив
  markers = [];

  const slicedArray = array.slice(0, ADS_COUNT);
  // Добавляем маркеры на карту
  slicedArray.forEach((el) => {
    const lat = el.location.lat;
    const lng = el.location.lng;
    const newMarker = L.marker({
      lat: lat,
      lng: lng,
    },
    {
      icon: commonPinIcon,
      keepInView: true,
    })
      .bindPopup(createPopup(el))
      .addTo(map);

    markers.push(newMarker);
  });
};


export { resetMap, renderPins };
