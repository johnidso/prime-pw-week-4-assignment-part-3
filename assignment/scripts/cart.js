console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Creating a global variable named basket and setting it to an empty array.

let basket = [];

// Creating addItem function along with stretch goals using isFull

function addItem(item) {
  if (isFull() === false) {
    basket.push(item);
    console.log(item, 'have been added to your basket.');
    return true;
  } else {
  return false;
  }
}

// testing addItem and isFull functionality

console.log('Basket includes', basket);
console.log('adding apples, expect true:', addItem('apples'));
console.log('Basket should now include apples', basket);
addItem('snap peas');
addItem('carrots');
addItem('onions');
addItem('avocados');
console.log('Adding blueberries to full cart, expect false:', addItem('blueberries'));
console.log(basket);

// creating function listItems

function listItems() {
  for (i of basket) {
    console.log(i);
  }
}

listItems();

// creating removeItem function

function removeItem(item) {
  basket.splice(basket.indexOf(item), 1);
  console.log(item, 'has been removed from your basket.');
  return true;
}

// testing isFull and removeItem

console.log('basket should be full, expect true:', isFull());

console.log('removing onions, expect true:', removeItem('onions'));
console.log('basket should now not contain onions', basket);

console.log('basket shoud now not be full, expect false', isFull());

// creating empty basket function

function empty() {
  basket = [];
  return true;
}

// testing empty basket function

console.log('emptying basket, expect true:', empty());
console.log(basket);

// creating a maxItems constant and setting it to 5

const maxitems = 5;

//creating isFull function

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

// Added additional isFull functionality to addItem() function on line 7

// Added removeItem function at line 35
