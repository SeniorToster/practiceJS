/* const quantitiesByCategories = products =>
  products.reduce((acum, item) => {
    acum[item.category] = (acum[item.category] || 0) + item.quantity;

    return acum;
  }, {}); */

const quantitiesByCategories = products =>
  products.reduce((acum, item) => {
    const { category, quantity } = item;

    acum[category] = (acum[category] || 0) + quantity;

    return acum;
  }, {});

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
