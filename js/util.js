const getOrdinal = (num, ordinals) => {
  const remainder100 = num % 100;
  const remainder10 = num % 10;

  if (remainder100 >= 11 && remainder100 <= 20) {
    return ordinals[2];
  }

  if (remainder10 === 1) {
    return ordinals[0];
  }


  if (remainder10 === 2 || remainder10 === 3 || remainder10 === 4) {
    return ordinals[1];
  }

  return ordinals[2];
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getOrdinal, isEscEvent };
