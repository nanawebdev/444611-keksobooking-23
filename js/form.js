const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');

  adFormFieldsets.forEach((element) => {
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
  adForm.classList.remove('ad-form--disabled');

  adFormFieldsets.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });

  mapFilters.classList.remove('map__filters--disabled');

  mapFiltersSelects.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });

  mapFiltersFieldsets.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
};

export {disableForm, enableForm};
