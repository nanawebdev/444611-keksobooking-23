const getRandomInteger = (from, to) => {
  if (from === to) {
    return;
  }

  if (from >= to || from < 0) {
    return;
  }

  return Math.floor(from + Math.random() * (to - from + 1));
};

const getRandomFloatNumber = (from, to, precision) => {
  if (from >= to || from < 0) {
    return from;
  }

  const randomNumber = from + Math.random() * (to - from);
  return parseFloat(randomNumber.toFixed(precision));
};

export {getRandomInteger, getRandomFloatNumber};
