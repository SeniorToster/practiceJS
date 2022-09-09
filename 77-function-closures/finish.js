const createGreeting = () => {
  let greetingString = 'Hey, this is';

  const greet = name => `${greetingString} ${name}`;

  const changeGreeting = hey => (greetingString = hey);

  return {
    greet,
    changeGreeting,
  };
};

const greeting1 = createGreeting();

console.log(greeting1.greet('Bob'));
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from');

console.log(greeting1.greet('Emily'));
// Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting();

console.log(greeting2.greet('Emily'));
// Hey, this is Emily
