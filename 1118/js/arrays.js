// creating an array using different methods
const cars = ['a', 'b', 'c'];

const cars = [];
cars[0] = 'a';
cars[1] = 'b';
cars; // cars = ['a', 'b']

const cars = new Array('a', 'b', 'c'); // cars = ['a', 'b', 'c'] using new keyword

/* */
typeof([]); //object

/* */

const num = [1, 2, 3, 4];
let numLength = num.length;

let text = "<ul>";

for(i=0; i<numLength; i++) {
    text += "<li>" + num[i] + "</li>";
}

text += "</ul>";

document.write(text);

/* */

//Associative arrays
//Arrays with named indexes are associative arrays, Javascript does not support, always supports numbered indexes.

//Differenece between arrays and objects
// Arrays use numbered indexes
// Objects use named indexes

//Arrays are a special kind of objects, with numbered indexes.


//delete array elements
let numbers = [1, 2, 3, 4, 5, 6];
delete numbers[0];

numbers.slice(2);


//compare function
const points = [40, 100, 1, 5, 25, 10];

//1, 10, 100, 25, 40, 5

points.sort(function(a, b) {return a - b });

//