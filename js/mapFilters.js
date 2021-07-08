const typeFilter = document.querySelector('#housing-type');
const priceFilter = document.querySelector('#housing-price');
const roomsFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');
const mapCheckbox = document.querySelectorAll('.map__checkbox');

const resetFilters = () => {
  typeFilter.value = 'any';
  priceFilter.value = 'any';
  roomsFilter.value = 'any';
  guestsFilter.value = 'any';

  mapCheckbox.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

export { resetFilters };
