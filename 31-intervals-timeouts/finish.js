let a = 1;

const inerval = setInterval(() => {
  console.log('Сообщение номер ' + a);
  a += 1;
}, 2000);

const stopInterval = setTimeout(() => clearInterval(inerval), 11000);
