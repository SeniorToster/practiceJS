const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
};

Object.keys(myObject).forEach(key => {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject[key]);
  }
});
