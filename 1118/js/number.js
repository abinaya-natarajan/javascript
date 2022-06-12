// javascript try to convert string into numbers in all numeric operations
let x = '100';
let y = '10'
let result = x / y; // 10

/* */

// NaN
let x = 100 / 'a'; // trying to do arithmetic with non-numeric string will result in NaN

let x = 100 / '10'; // 10
// if the string contains a numeric value, then the result will be a number

/* */

//isNaN() function
let x = 100 / 'a';
isNaN(x);

/* */

let x = NaN;
let y = 5;
let result = x + y; //NaN

/* */

let x = NaN;
let y = '5';
let result = x + y; //NaN5

/* */

typeof(NaN); //number
NaN == NaN // false
NaN === NaN // false

/* */

//Infinity
let x = 2 / 0;
let y = -2 / 0;

typeof(Infinity); // number
Infinity == Infinity; // true
Infinity === Infinity; // true

/* */

//Number methods are pending since it is not much clear

/* */

