const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
];

const carInfo = ({ brand, price }) =>
  `${brand}- Автомобиль считается ${price <= 20000 ? 'дешевым' : 'дорогим'}`;

cars.forEach(car => console.log(carInfo(car)));
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
