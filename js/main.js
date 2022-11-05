const takeNumber = (min, max) => (min >= 0 && max >= min) ? Math.floor(Math.random()) *(min - max + 1) + max : 'Ошибка';
(takeNumber(1, 6));

const checkMaxLength =(string, maxLength) => string.length < maxLength;
(checkMaxLength('Кекс', 7));
