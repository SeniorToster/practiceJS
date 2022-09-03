const personInfo = ({ name, age, location: { country, city } }) => ({
  name: name,
  personAge: age,
  origin: country,
  homeCity: city,
  friendsQty: 0,
  createdAtYear: new Date().getFullYear(),
});
const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
};

const result = personInfo(person);

console.log(result);
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
