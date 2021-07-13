import { showSuccessPopup, showErrorPopup  } from './resultsPopup.js';
import { resetMap } from './map.js';
import { resetForm } from './form-helpers.js';
import { resetFilters } from './mapFilters.js';

const form = document.querySelector('.ad-form');
const clearFormButton = document.querySelector('.ad-form__reset');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessPopup();
        resetForm();
        resetMap();
        resetFilters();
      } else {
        showErrorPopup();
      }
    })
    .catch(() => {
      showErrorPopup();
    });
});

clearFormButton.addEventListener('click', resetForm);
