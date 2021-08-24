'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    { starterIndex = 1, mainIndex = 0, time = '8 PM', address } //Needs to be in brackets. You can use default values
  ) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}!`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Onga',
});

//REST PATTERN

//SPREAD is on the right side of the operator =
const arr = [1, 2, ...[3, 4]];

//REST is on the left side of the operator =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 6, 7);
add(2, 3, 6, 7, 9);

const x = [23, 5, 7];
add(...x); //Spread

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// // OBJECT DESTRUCTURING

// //Basic destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //Renaming new variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Setting default values. If you set it to an empty array, but the original has data, the data will be copied without a problem.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables while destructuring objects
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); //Wrap it under parenthesis for it to work
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open, close }, //Destructure to a deeper level
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

//SPREAD OPERATOR
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnochi'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Joining 2 arrays or more
// const newMenu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu2);

// // Iterables: arrays, strings, maps, sets, NOT Objects
// const str = 'Jonas';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);

// //Real world example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

// //restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Bob' };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ARRAY DESTRUCTURING

// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //Reassigning using destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching new variables, old way
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// //Using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receiving two return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Working with nested arrays (arrays inside arrays)
// const nested = [2, 4, [5, 6]];
// //let [i, , j] = nested;
// //console.log(i, j);

// //Working with individual values of nested arrays
// let [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
