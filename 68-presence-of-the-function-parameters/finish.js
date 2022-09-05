function square(a) {
  a === undefined
    ? console.error('Функция square не может быть вызвана без аргумента')
    : console.log(a * a);
}

square(10);
// 100

square();
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
