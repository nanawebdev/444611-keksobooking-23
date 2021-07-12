const ADS_COUNT = 10;
import { renderSimilarPins } from './map.js';

let allData = [];

const onSuccess = (data) => {
  allData = data;
  const slicedData = data
    .slice(0, ADS_COUNT);

  renderSimilarPins(slicedData);
};

const getAdsData = () => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then(onSuccess);
};

const housingTypeInput = document.querySelector('[name="housing-type"]');
// const housingPriceInput = document.querySelector('[name="housing-price"]');
// const housingRoomsInput = document.querySelector('[name="housing-rooms"]');
// const housingGuestsInput = document.querySelector('[name="housing-guests"]');
// const wifiInput = document.querySelector('#filter-wifi');
// const dishwasherInput = document.querySelector('#filter-dishwasher');
// const parkingInput = document.querySelector('#filter-parking');
// const washerInpiut = document.querySelector('#filter-washer');
// const elevatorInput = document.querySelector('#filter-elevator');

housingTypeInput.addEventListener('change', (ev) => {
  const filteredData = allData.filter((adv) => adv.offer.type === ev.target.value);

  renderSimilarPins(filteredData);
});

// План
// 1. Удалять предыдущие пины
// 2. Как только фильтр меняется (то есть на каждый рендер) скрывать балун, если он открыт (видимо, почитать документацию)
// 3. Сделать так, чтобы фильтрация учитывала все значения инпутов/селектов, а не только того, который изменился.

export { getAdsData };
