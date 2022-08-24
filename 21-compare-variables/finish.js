let myVariable1 = 10;
let myVariable2 = '5';

const comparison = () => {
  myVariable1 = Number(myVariable1);
  myVariable2 = Number(myVariable2);
  if (myVariable1 <= myVariable2) {
    console.log(true);
  }
};

comparison();

myVariable1 = '20';
myVariable2 = 100;

comparison();
