import { resetFilters } from './reset-filters.js';
import { resetMap } from './map.js';

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');
const titleInput = document.querySelector('#title');
const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const roomNumberInput = document.querySelector('#room_number');
const capacityInput = document.querySelector('#capacity');
const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');
const descriptionInput = document.querySelector('#description');
const featuresCheckboxes = document.querySelectorAll('.features__checkbox');


const disableForm = () => {
  form.classList.add('ad-form--disabled');

  formFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  mapFilters.classList.add('map__filters--disabled');

  mapFiltersSelects.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });


  mapFiltersFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const enableForm = () => {
  form.classList.remove('ad-form--disabled');

  formFieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFilters.classList.remove('map__filters--disabled');

  mapFiltersSelects.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFiltersFieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const resetForm = () => {
  titleInput.value = '';
  typeSelect.value = 'flat';
  priceInput.value = '';
  roomNumberInput.value = '1';
  capacityInput.value = '1';
  timeinSelect.value = '12:00';
  timeoutSelect.value = '12:00';
  descriptionInput.value = '';

  featuresCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  resetMap();
  resetFilters();
};

export { disableForm, enableForm, resetForm };
