const getRandomInteger = (from, to) => {
  if (from === to) {
    return from;
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

const getOrdinal = (num, ordinals) => {
  const remainder100 = num % 100;
  const remainder10 = num % 10;

//   if (remainder100 >= 11 && remainder100 <= 20) {
//     return ordinals[2];
//   }

//   if (remainder10 === 1) {
//     return ordinals[0];
//   }


//   if (remainder10 === 2 || remainder10 === 3 || remainder10 === 4) {
//     return ordinals[1];
//   }

//   return ordinals[2];
// };

// export { getRandomInteger, getRandomFloatNumber, getOrdinal };
