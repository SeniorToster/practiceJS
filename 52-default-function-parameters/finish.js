/* 
const weatherForecast = (city, weather = 'Отличная погода!') =>
  `Прогноз погоды для города ${city}: ${weather}`;
 */

const weatherForecast = (city, weather) =>
  `Прогноз погоды для города ${city}: ${
    typeof weather === 'undefined' ? 'Отличная погода!' : weather
  }`;

console.log(weatherForecast('Dubai', 'Солнечно'));
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'));
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'));
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''));
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined));
// Прогноз погоды для города Las Vegas: Отличная погода!
