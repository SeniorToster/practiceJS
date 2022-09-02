const myCities = ['London', 'New York', 'Singapore'];

const cityInfo = (city, index) =>
  `${city} is at the index ${index} in the myCities array`;

myCities.forEach((city, index) => console.log(cityInfo(city, index)));
