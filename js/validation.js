const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const typesDictionary = {
  'flat' : '1000',
  'hotel' : '3000',
  'house' : '5000',
  'palace' :  '10000',
  'bungalow' : '0',
};

houseTypeSelect.addEventListener('change', () => {
  const currentType = houseTypeSelect.value;
  const minPrice = typesDictionary[currentType];
  priceInput.setAttribute('min', minPrice);

  priceInput.addEventListener('invalid', () => {
    if (priceInput.validity.tooShort)
  });
});

