const cars = [
  {
    carBrand: 'audi',
    price: 1500,
    isAvailableForSale: true,
  },
  {
    carBrand: 'bmw',
    price: 2500,
    isAvailableForSale: false,
  },
  {
    carBrand: 'mazda',
    price: 5500,
    isAvailableForSale: true,
  },
];

console.log(cars);

cars.push({
  carBrand: 'nissan',
  price: 3500,
  isAvailableForSale: true,
});

console.log(cars);
