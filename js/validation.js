const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const titleInput = document.querySelector('#title');

const typesDictionary = {
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
  'bungalow': '0',
};

const onHouseTypeChange = () => {
  const currentType = houseTypeSelect.value;
  const minPrice = typesDictionary[currentType];
  priceInput.setAttribute('min', minPrice);
  priceInput.setAttribute('placeholder', minPrice);
};

onHouseTypeChange();

houseTypeSelect.addEventListener('change', onHouseTypeChange);

priceInput.addEventListener('invalid', () => {
  if (priceInput.validity.rangeUnderflow) {
    const min = priceInput.getAttribute('min');
    priceInput.setCustomValidity(`Значение не должно быть меньше ${min}`);
  } else if (priceInput.validity.rangeOverflow) {
    const max = priceInput.getAttribute('max');
    priceInput.setCustomValidity(`Значение не должно превышать ${max}`);
  } else if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Обязательное поле');
  } else {
    priceInput.setCustomValidity('');
  }
});

titleInput.addEventListener('invalid', () => {
  if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity('Введите больше 30 символов');
  } else if (titleInput.validity.tooLong) {
    titleInput.setCustomValidity('Введите меньше 100 символов');
  } else if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Обязательное поле!');
  } else {
    titleInput.setCustomValidity('');
  }
});

const roomQuantity = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');

const availableCapacityDictionary = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const onRoomQuantityChange = () => {
  const availableCapacity = availableCapacityDictionary[roomQuantity.value];

  const optionToSelect = availableCapacity[0];

  capacityOptions.forEach((el) => {
    if (availableCapacity.includes(el.value)) {
      el.removeAttribute('disabled');
    } else {
      el.setAttribute('disabled', '');
    }

    if (el.value === optionToSelect) {
      el.setAttribute('selected', '');
    } else {
      el.removeAttribute('selected');
    }
  });
};

onRoomQuantityChange();

roomQuantity.addEventListener('change', onRoomQuantityChange);

const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');

const onTimeinSelectChange = () => {
  timeoutSelect.value = timeinSelect.value;
};

const onTimeoutSelectChange = () => {
  timeinSelect.value = timeoutSelect.value;
};

onTimeinSelectChange();
onTimeoutSelectChange();
timeinSelect.addEventListener('change', onTimeinSelectChange);
timeoutSelect.addEventListener('change', onTimeoutSelectChange);
