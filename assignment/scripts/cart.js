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

console.log('***** Stretch Goals *****');

const maxitems = 5;

function isFull() {
  if (basket.length < 5) {
    console.log('You have room in your basket.');
    return false;
  } else {
    console.log('Your basket is full!');
    return true;
  }
}

console.log('basket.length is:', basket.length);
console.log('expect false if <5, true otherwise:', isFull());

// Adding additional isFull functionality to addItem() function on line 7
