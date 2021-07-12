import { debounce } from './utils/debounce.js';
import { renderPins } from './map.js';

let allData = [];

const onSuccess = (data) => {
  allData = data;
  renderPins(allData);
};

const getAdsData = () => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then(onSuccess);
};

const housingTypeInput = document.querySelector('[name="housing-type"]');
const housingPriceInput = document.querySelector('[name="housing-price"]');
const housingRoomsInput = document.querySelector('[name="housing-rooms"]');
const housingGuestsInput = document.querySelector('[name="housing-guests"]');
const wifiInput = document.querySelector('[value="wifi"]');
const dishwasherInput = document.querySelector('[value="dishwasher"]');
const parkingInput = document.querySelector('[value="parking"]');
const washerInpiut = document.querySelector('[value="washer"]');
const elevatorInput = document.querySelector('[value="elevator"]');
const conditionerInput = document.querySelector('[value="conditioner"]');

const filterByFeature = (feature, data) =>
  data.filter((adv) => {
    if (adv.offer.features && adv.offer.features.includes(feature)) {
      return true;
    }
    return false;
  });

const renderFilterData = () => {
  let filteredData = allData;
  // фильтр по типу жилья
  filteredData = filteredData.filter((adv) => adv.offer.type === housingTypeInput.value || housingTypeInput.value === 'any');
  // Фильтр по цене
  if (housingPriceInput.value === 'middle') {
    filteredData = filteredData.filter((adv) =>  adv.offer.price >= 10000 && adv.offer.price <= 50000);
  }

  if (housingPriceInput.value === 'low') {
    filteredData = filteredData.filter((adv) =>  adv.offer.price <= 10000);
  }

  if (housingPriceInput.value === 'high') {
    filteredData = filteredData.filter((adv) =>  adv.offer.price >= 50000 );
  }
  // фильтр по кол-ву комнат
  if (housingRoomsInput.value === '1') {
    filteredData = filteredData.filter((adv) =>  adv.offer.rooms === 1);
  }
  if (housingRoomsInput.value === '2') {
    filteredData = filteredData.filter((adv) =>  adv.offer.rooms === 2);
  }
  if (housingRoomsInput.value === '3') {
    filteredData = filteredData.filter((adv) =>  adv.offer.rooms === 3);
  }
  // фильтр по кол-ву гостей
  if (housingGuestsInput.value === '2') {
    filteredData = filteredData.filter((adv) =>  adv.offer.rooms === 2);
  }

  if (housingGuestsInput.value === '1') {
    filteredData = filteredData.filter((adv) =>  adv.offer.rooms === 1);
  }

  if (housingGuestsInput.value === '0') {
    // ошибка — тут н
    filteredData = filteredData.filter((adv) =>  adv.offer.rooms === 0);
  }

  if (wifiInput.checked) {
    filteredData = filterByFeature('wifi', filteredData);
  }

  if (dishwasherInput.checked) {
    filteredData = filterByFeature('dishwasher', filteredData);
  }

  if (parkingInput.checked) {
    filteredData = filterByFeature('parking', filteredData);
  }

  if (washerInpiut.checked) {
    filteredData = filterByFeature('washer', filteredData);
  }

  if (conditionerInput.checked) {
    filteredData = filterByFeature('conditioner', filteredData);
  }

  if (elevatorInput.checked) {
    filteredData = filterByFeature('elevator', filteredData);
  }

  renderPins(filteredData);
};

const onChange = (input) => {
  input.addEventListener('change', debounce(renderFilterData, 500));
};

onChange(housingTypeInput);
onChange(housingPriceInput);
onChange(housingRoomsInput);
onChange(housingGuestsInput);
onChange(wifiInput);
onChange(dishwasherInput);
onChange(parkingInput);
onChange(washerInpiut);
onChange(conditionerInput);
onChange(elevatorInput);

export { getAdsData };
