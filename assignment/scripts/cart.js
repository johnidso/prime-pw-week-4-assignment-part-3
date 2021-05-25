console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  basket.push(item);
  console.log(item, 'have been added to your basket.');
  return true;
}

console.log('Basket includes', basket);
console.log('adding apples, expect true:', addItem('apples'));
console.log('Basket should now include apples', basket);
addItem('snap peas');
addItem('carrots');
addItem('onions');
addItem('avocados');
console.log(basket);

function listItems() {
  for (i of basket) {
    console.log(i);
  }
}

listItems();

function empty() {
  basket = [];
  return true;
}


console.log('emptying basket, expect true:', empty());
console.log(basket);
