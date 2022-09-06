const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
};

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
};

/* const shortPerson = ({ name, info: { country, age }, postsQuantity = 0 }) => ({
  n: name,
  c: country,
  a: age,
  p: postsQuantity,
}); */

/* 
const shortPerson = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => ({
  n,
  c,
  a,
  p,
});
 */

const shortPerson = person => {
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person;

  return {
    n,
    c,
    a,
    p,
  };
};

console.log(shortPerson(person1));
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2));
// { n: "Alice", c: "Italy", a: 25, p: 0 }
