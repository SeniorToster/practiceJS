function fn() {
  console.log('Привет из функции fn');

  return function (a) {
    console.log(a);
  };
}

fn()(true);

/* Выведет в консоль Привет из функции fn и true */
