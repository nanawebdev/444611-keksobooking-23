import { isEscEvent } from './util.js';
const errorPopup = document.querySelector('#error').content.querySelector('.error');
const successPopup = document.querySelector('#success').content.querySelector('.success');

const closeResultPopup = (template) => {
  document.body.removeChild(template);
};

const showErrorPopup = () => {
  const errorTemplate = errorPopup.cloneNode(true);
  const closeErrorPopupButton = errorTemplate.querySelector('.error__button');

  closeErrorPopupButton.addEventListener('click', () => {
    closeResultPopup(errorTemplate);
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeResultPopup(errorTemplate);
    }
  });

  errorTemplate.addEventListener('click', () => {
    closeResultPopup(errorTemplate);
  });

  document.body.appendChild(errorTemplate);
};

const showSuccessPopup = () => {
  const successTemplate = successPopup.cloneNode(true);
  document.body.appendChild(successTemplate);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeResultPopup(successTemplate);
    }
  });

  successTemplate.addEventListener('click', () => {
    closeResultPopup(successTemplate);
  });
};

export { showSuccessPopup, showErrorPopup };
