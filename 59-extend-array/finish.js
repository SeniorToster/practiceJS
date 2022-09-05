class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, item) => (acc += item), 0);
  }

  onlyNumbers() {
    return this.filter(item => typeof item === 'number');
  }
}

const ar = new ExtendedArray(1, 4, 6, 'aqr', 34, 'em');

console.log(ar.onlyNumbers());

const arNum = ar.onlyNumbers();

console.log(arNum.sum());
