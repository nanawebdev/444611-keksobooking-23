import { enableForm, disableForm } from './form.js';

disableForm();

const map = L.map('map-canvas').on('load', () => { enableForm(); }).setView([35.6895, 139.69171], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pinIcon = L.icon({
  iconUrl: './../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker({
  lat: 35.6895,
  lng: 139.69171,
},
{
  draggable: true,
},
{ icon: pinIcon,
});

marker.addTo(map);

// marker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });

const popup = L.popup();

function onMarkerClick() {
  popup.setLatLng([35.6895, 139.69171]).setContent('Я родился!').openOn(map);
}

marker.on('click', onMarkerClick);

