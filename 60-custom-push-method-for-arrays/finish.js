class CustomArray extends Array {
  customPush(newElement) {
    this[this.length] = newElement;
    console.log(`Новый элемент $(newElement) был только что добавлен в массив`);
  }
}

const customPush = new CustomArray(1, 3, 4, 7, 20, 2);

customPush.customPush(110);

console.log(customPush);
