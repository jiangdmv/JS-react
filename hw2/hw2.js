/*
Question 1, Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Question 2, Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Question 3, Given the array, implement a function to calculate the total value of the items  
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//Question 1 solution
const array1 = itemsObject.map((ele) => {
  return { quantity: ele.quantity * 2, price: ele.price * 2 };
});

console.log(array1);
console.log(itemsObject);

// another solution for Question 1
const arrayOne = itemsObject.map((ele) => {
  let newEle = { ...ele };
  newEle.quantity *= 2;
  newEle.price *= 2;
  return newEle;
});

console.log(arrayOne);

// the other solution for Question 1
const itemsObject1 = [];
itemsObject.forEach((ele) => {
  let newEle = Object.create(ele);
  newEle.quantity *= 2;
  newEle.price *= 2;
  itemsObject1.push(newEle);
});

console.log(itemsObject1);

// Question 2 solution
const arrayTwo = itemsObject.filter(
  (ele) => (ele.quantity > 2) & (ele.price > 300)
);

console.log(arrayTwo);

// Question 3 solution
const totalThree = itemsObject.reduce(
  (total, ele) => total + ele.quantity * ele.price,
  0
);

console.log(totalThree);

//Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

let words = string.trim().split(/[ -]+/);
let str2 = words.join(" ").toLowerCase();

console.log(str2);
