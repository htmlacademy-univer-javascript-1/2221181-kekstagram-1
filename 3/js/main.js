const takeNumber = (begin, end) => (begin >= 0 && end >= begin) ? Math.floor(Math.random()) *(begin - end + 1) + end : 'Ошибка';
console.log(takeNumber(1, 6));
