const getRandomInteger = (from, to) => {
  if (from >= to) {
    alert("Введите корректный диапазон: значение \"до\" должно быть больше значения \"от\"")
    return
  }

  if (from < 0) {
    alert("Введите значение больше 0 (включительно)")
    return
  }

  return Math.floor(from + Math.random() * (to - from + 1))
}

const getRandomFloatNumber = (from, to, precision) => {
   if (from >= to) {
    alert("Введите корректный диапазон: значение \"до\" должно быть больше значения \"от\"")
     return
  }
  if (from < 0) {
    alert("Введите значение больше 0 (включительно)")
    return
  }

  let randomNumber = from + Math.random() * (to - from)
  return parseFloat(randomNumber.toFixed(precision))
}

console.log(getRandomInteger(1.2, 2.4))
console.log(getRandomFloatNumber(1.1, 1.2, 2))
