const takeNumber = (min, max) => (min >= 0 && nax >= min) ? Math.floor(Math.random()) *(min - max + 1) + max : 'Ошибка';
console.log(takeNumber(1, 6));

const checkMaxLength =(string, maxLength) => string.length < maxLength;
console.log(checkMaxLength("Кекс", 7));