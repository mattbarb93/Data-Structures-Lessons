'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //ES6 NEW METHOD: You can use property names using square brack syntax
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//console.log(openingHours);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals

  //If the object alread exists somewhere else, you can reference it inside the object by calling the same name
  openingHours,

  //Functions dont really need the "function" keyword in the front
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(
    { starterIndex = 1, mainIndex = 0, time = '8 PM', address } //Needs to be in brackets. You can use default values
  ) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}!`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//LOOPING OVER OBJECTS

//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object

const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// //SETS

// //Sets only add unique values. Duplicates WILL BE REMOVED.
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// //Duplicates are removed
// console.log(ordersSet);

// //It's .size, not .length
// console.log(ordersSet.size);

// //Similar to the "includes" method in arrays, use "has" to see if something exists
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// //Adding
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// //Removing
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// //Retrieving values from Sets? There's no need, you just use the set to see what's inside, not a specific value.

// //Looping sets
// for (const order of ordersSet) {
//   console.log(order);
// }

// //EXAMPLE: Show which positions are in a restaurant
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // Use spread operator on the iterable, to upack the entire set into a new array
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

// //EXAMPLE: WHAT LETTERS ARE IN A STRING
// console.log(new Set('oogabooga').size);

// //MAPS - Data Structure to map values to keys.

// //Set it up empty first
// const rest = new Map();

// //Adding sets
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// //You can chain set additions
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');

// //To find values
// console.log(rest.get('name')); //Returns Clasico Italiano
// console.log(rest.get(true)); //Returns We are open!

// //Comparing Set values (dont overuse it, since its harder to read)
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //Checking if a value exists
// console.log(rest.has('categories'));

// //Deleting
// rest.delete(2);
// console.log(rest);

// //Size property
// console.log(rest.size);

// //Clearing Maps
// //rest.clear();
// //console.log(rest);

// //You can use arrays or objects as map keys
// const arr = [1, 2]; //You have to name them beforehand tho
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

//MAPS: ITERATION

const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! '],
  [false, 'False!'],
]);
console.log(question);

//Convertinig object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//DISPLAY CORRECT ANSWER IF IT MATCHES
//const answer = Number(prompt('Your answer'));
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

//CONVERT MAP TO ARRAY
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
//<----------------------------------------------------->
//OPTIONAL CHAINING//
//If a certain property doesnt exist, undefined returns immediately

//Without Option Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// //With Optional Chaining

// //ONLY if Monday property exists, meaning not null or undefined, it'll be displayed
// console.log(restaurant.openingHours.mon?.open);

// //ONLY if Opening Hours, and Monday properties exist
// console.log(restaurant.openingHours?.mon?.open);

// //PRACTICAL EXAMPLE
// //PRINT THE HOURS OF THE DAYS WHERE THE RESTAURANT IS OPEN

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //same as openingHours.mon
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Doesnt exist

// //Array
// const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];

// console.log(users[0]?.name ?? 'User array empty'); //Display if it exists. MUCH SIMPLER THAN if else, and a bunch of checks

// //<-------------------------------------------------->

// /*FOR OF LOOP
// //for (const [NAME OF INDIVIDUAL ITEM INSIDE ARRAY] of [ARRAY YOU WANNA LOOP]) {
// }
// */
// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// //USING DESTRUCTURING
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
//console.log([...menu.entries()]);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Onga',
// });

// //REST PATTERN

// //SPREAD is on the right side of the operator =
// const arr = [1, 2, ...[3, 4]];

// //REST is on the left side of the operator =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 6, 7);
// add(2, 3, 6, 7, 9);

// const x = [23, 5, 7];
// add(...x); //Spread

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

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
