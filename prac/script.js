// const num1 = parseInt(prompt('Enter first number'));
// const num2 = parseInt(prompt('Enter second number'));

// const sum = alert(num1 + num2);

// let x = 5;
// let y = 3;

// console.log('result = ', x + y);
// console.log('x % y = ', x % y);

// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // x returns 6 and then increases by 1
// console.log('x = ', x);

// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // x returns 6 and then increases by 1
// console.log('x = ', x); 


// console.log('x ** y =', x ** y);


// var test = function() {
//     return 
// }

// const number = prompt('Enter the number');

// if(number > 1) {
//     console.log('if returns true');
// }

// console.log('If statement is good');

// const number = prompt('Enter the number');

// if(number > 1) {
//     console.log('Condition 1 is executed');
// } 
// else if (number == 1) {
//     console.log('Condition 2 is executed');
// }
// else {
//     console.log('Condition 3 ');
// }

// const n = 5;

// for(var i=1;i<=n;i++) {
//     console.log('Javascript');
// }

// let i = 1, n = 5;

// while(i<=n){
//     console.log(i);
//     i += 1; // i = i + 1;
//     // console.log(i);
// }

// let sum = 0;

// // take input from the user
// let number = parseInt(prompt('Enter a number: '));

// while(number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

// let fruit = 'apple';

// switch(fruit) {
//     case 'apple' :
//     case 'mango' :
//     case 'pineapple' :
//         console.log(`${fruit} is a fruit`);
//         break;
//     default: 
//         console.log(`${fruit} is not a fruit`);
// }


// function greet(name) {
//     console.log('hello ' + name);
// }

// let name = prompt('Enter the name');

// greet(name);


// function add(a, b) {
//     return a + b;
// }

// var result = add(2, 3);
// console.log(result);

// let x = function(num) {
//     return num * num;
// }
// console.log(x(2));

// let y = x(3);
// console.log(y);

// let a = 'hello';

// function greet() {
//     a = 3;
// }

// console.log(a);

// greet();

// console.log(a);

// function greet() {
//     let a = 10;
//     console.log(a); //10
//     if(true) {
//         let a = 20;
//         console.log(a); //20
//     }
//     console.log(a); //10
// }
// greet();


// function greet1() {
//     var a = 10;
//     console.log(a); //10
//     if(true) {
//         var a = 20;
//         console.log(a); //20
//     }
//     console.log(a); // 20
// }
// greet1();


// function greet2() {
//     const a = 10;
//     console.log(a); //10
//     if(true) {
//         const a = 20;
//         console.log(a); //20
//     }
//     console.log(a); // 20
// }
// greet2();

// function greet3() {
//     const a = 10;
//     console.log(a); //10
//     if(true) {
//         a = 20;
//         console.log(a); //20
//     }
//     console.log(a); // 20
// }
// greet3();

// let a = 'hello';

// function greet() {
//     var  b = 'world';
//     console.log(a + b);
// }

// greet();
// console.log(a + b);

// let a = 'hello';   // doubt - needs to discuss

// function greet() {
//     let b = 'world';

//     console.log(a + b);

//     if (b == 'world') {
//         var  c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }
// }

// greet();
// console.log(a + ' ' + c + ' ' + b);

// a = 5;
// console.log(a);
// var a;


// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b);
//     var b;
// }
// greet();
// console.log(b);


// a = 5;
// console.log(a);
// let a;

// greet();

// function greet() {
//     console.log('hi, there!');
// }

// greet();

// let greet = function() {
//     console.log('hi, there!');
// }


// greet();

// var greet = function() {
//     console.log('hi, there!');
// }

// function countDownNumber(number) {
//     console.log(number);

//     const newNumber = number - 1;
//     if(newNumber > 0) {
//         countDownNumber(newNumber);
//     }
// }

// countDownNumber(4);

// function factorial(x) {

//     if(x === 0) {
//         return 1;
//     }

//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 0;

// if(num >= 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }


// const person = {
//     name: 'jeep',
//     greet: function() {
//         console.log('hello');
//     }
// }

// person.greet;

// const person = {
//     name: 'jeep'
// }
// console.log(person.name);

// const student = person;
// student.name = 'chrysler';
// console.log(person.name);

// function PersonCre() {
//     this.name = 'jeep',
//     this.age = 24
// }

// const person1 = new PersonCre();
// console.log(person1.name);

// function Person() {
//     this.firstName = "unknown";
//     this.lastName = "unknown";
//     this.getFullName = function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// var person1 = new Person();

// person1.firstName = 'steve';
// person1.lastName = 'job';

// // alert(person1.firstName + ' ' + person1.lastName);
// // alert(`${person1.firstName} ${person1.lastName}`);
// alert(`${person1.getFullName()}`);

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getFullName = function() {
//         // return this.firstName + ' ' + this.lastName + this.age;
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }

// var person1 = new Person();
// alert(person1.getFullName());


// function Person() {
//     var firstName = "unknown";

//     Object.defineProperties(this, {
//         "FirstName": {
//             get: function() {
//                 return firstName;
//             },
//             set: function(value) {
//                 firstName = value;
//             }
//         }
//     });
// };

// var person1 = new Person();


// function Student() {
//     this.title = 'Mr.';
//     this.name = 'X';
//     this.gender = '1';
// }

// var student1 = new Student();

// Object.keys(student1);

// var student2 = new Student();

// for (var prop in student2) {
//     console.log(prop);
// }

// var a = 100;

// function test() {
//     var a = 200;
//     console.log(a);
//     console.log(this.a);
// }

// test();


// function testMethod() {
//     alert('hi');
// }

// testMethod();

// function testMethod1() {
//     alert('call');
// }

// testMethod1.call();

// function testMethod2() {
//     alert('apply');
// }

// testMethod2.apply();


// function MyFunc() {
//     this.x = 100;
// }

// var obj1 = new MyFunc();

// obj1 = {
//     x = 100
// };

// obj1.x = 100;


// var text = 'outside';
// function logIt(){
//     console.log(text); //o
//     var text = 'inside';
// };
// logIt();


// function display(total) {
//     console.log(total);
//     document.write(total);
// }

// function calculate(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = calculate(2, 2);

// display(result);

// function display(result) {
//     document.write(result);
//     console.log(result);
// }

// function calc(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// calc(5, 7, display);


// new WhoIsThis(); // { }

// var obj = { 

// };



// var myVar = 100; //200

// function WhoIsThis() {
//     this.myVar = 200;

//     alert(myVar); // 200 // 100
//     alert(this.myVar); // 200 // 200
// }

// WhoIsThis(); // inferred as window.WhoIsThis()

// var obj = new WhoIsThis(); { myVar: 200 }
// alert(obj.myVar); // 200


// var myVar = 100;

// function SomeFunction() {
//     function WhoIsThis() {
//         var myVar = 200;

//         alert("myVar = " + myVar); // 200
//         alert("this.myVar = " + this.myVar); // 100
//     }

//     WhoIsThis(); 
// }

// SomeFunction();


// var obj = {
//     myVar: 200,
//     display: 
// }




// var myVar = 100;

// var obj = { 
//             myVar : 300, 
// 	        whoIsThis: function(){
//                         var myVar = 200;

//                         alert(myVar); // 200
//                         alert(this.myVar); // 300
// 	            }
// };

// var obj2 = obj.whoIsThis;
// var obj1 = {
//     myVar: 500
// };


// function Test() {
//     alert('hi');
// }

// var testObj = {};

// var a = Test.bind(testObj);
// a();



// function Human(firstName, lastName, age) {
//     console.log(this);
// }

// const zell = new Human('Zell', 'Liew', 29);


// function



// var myVar = 100;

// function WhoIsThis() {

//     alert(this.myVar);
// }

// var obj1 = { myVar : 200 , whoIsThis: WhoIsThis };

// obj1.whoIsThis.call(window);



// let firstName = 'Jeep';

// function Test(a, b) {
//     alert(this.firstName, a, b);
// }

// var person = {
//     firstName: 'chrysler'
// };

// Test.call(person, 'ab', 2);

var a = 10;
function test() {}

this: {
     a: 10,
    test: function() {}
}

{
    myVar: 100,
    whoisthis: function() {
        alert(this.myVar);
    }
}

window: {
    obj: {
        name: 'niladri'
    }
    greeting: function() {
        this.name
    },
}



var a = 10;

var b = 

functio

window: {
    a: 10,
    b: 20,
    test: function() { 
        this.a
        }
}

var obj = {
    a: 20
}

window.test.call(obj);


function createbase(baseNumber) {
    return function(num) {
        return baseNumber + num;
    }
}

var add = createbase(6);
add(10);

function counter() {
    var a = 0;
    return function() {
        return a = a + 1
        a++
    }
}


var obj1 = {
    name: 'jeep'
};

var jeep = {
    model: 'compass'
};

var chrysler = {...jeep};


function isPropertyEqual() {
    return obj1.model === obj2.model;
}

isPropertyEqual(obj1, obj2);

var obje = {
    model: 'compass',
    brand: 'jeep',
    price: 20,
    getDetails: function() {
        alert('car details' + obje.name + obje.brand)
    }
}




function counter() {
    var count = 0;
    return function() {
        count += 1;
        return count; 
    }
}

var countfunc = counter(); 


console.log(countfunc());
countfunc();
countfunc();
countfunc();
countfunc();


function Person(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

Person.prototype.country = 'India';



function Student(grade) {

    Person.call(this, firstName, age);

    this.grade = grade;
}

var stud1 = new Student('a', 'jj', 24);



var a = 10;

function Test() {
    console.log(a); //10
    console.log(this.a); //10
}
Test();

var obj1 = new Test(); 

obj1 = {
    
}


var dummy = {
    a: 20
}


Test.call(dummy);



function Mammals(animalName, type) {
    this.animalName = animalName;
    this.type = type;
}

function Animals(color, animalName, type) {

    Mammals.call(this, animalName, type);

    this.color = color;
}

Animals('brownie', 'husky', 'german');

console.log(animalName);
console.log(type);
console.log(color);

// var doggie = new Animals('brownie', 'husky', 'german');


var a = {value: 10}

function test() {
    return this.value;
}

var bound = test;



const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);



const arrayOfNumbers = [1, 2, 3, 4];



arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);



let arrayOfLetters = ['a','b','c','d','e','f'];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
console.log(anotherArrayOfLetters);


var obj1 = {
    brand: 'j'
};


var obj2 = obj1;



const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]



function getUniqueValues(num) {
    if()
}



function multiply(num1) {
    return function(num2) {
      return  num1 * num2;
    }

}


multiply(5)(6);


const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);


const arrayOfNumbers = [1, 2, 3, 4];
How can you double elements of an array using reduce? Please note that you cannot create additional variables.




const arr1 = [1, 2, 3, 4];

const arr2 = [];
arr2[0] = 'hello';
arr2; // ['hello']

const arr3 = new Array('world');

const arr4 = Array.of(1, 2, 3);
arr4; // [1, 2, 3]

=====================

var array = [1,2,3,4,5];

var copyArray = [];

for(var i=0;i<array.length;i++){
    copyArray[i] = array[i];
}


var array = [1,2,3,4,5];

var array2 = [...array];


var array = [1,2,3,4,5];

var arr1 = Object.assign([], array);


var array = [1,2,3,4,5];

var result = array.slice();

====================

var array = [1,2,3,4,5]
array = [];


var array = [1,2,3,4,5]
array.length = 0;

var array = [1,2,3,4,5]
array.splice(0, array.length);

===========

var array = [1,2,3,4,5];

Array.isArray(array);


function checkArray() {
    
}


var a = 20;

test();

function test() {
    a = 10;
    console.log(a);
}

console.log(a);


var arr= ['a','b','c','d'];

arr1.indexOf('d');



var items = ['milk', 'bread', 'sugar'];


function checkArray(item) {
    if(items.indexOf(item) === -1) {
        console.log('Item does not exist');
    } else {
        console.log('item exist');
    }
}

checkArray(items);



var items = ['milk', 'bread', 'sugar'];
function removeItem(item) {
    if(items.indexOf(item) !== -1) {
        items.splice(item, 1);
        console.log(items);
    }
}


removeItem('milk');



var items = ['milk', 'bread', 'sugar'];

for loop
forEach
map



var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];



var result = [];

function sortNumber(num) {
    
}

sortNumber(numbers);


for(var i=0;i<arrayOfNumbers.length;i++) {
    XPathResult.push()
}


3,3,5,2,3


var a = [22,1]


var numbers = [1, 2, 3, 4, 5, 6];

numbers.reduce(total, num ) {
    total + num;
} 


Var array = [[0, 1], [2, 3], [4, 5]];

array.reduce(total, index) {

}  


animals[1].species

var dogs = animals.filter((animals) => {
    return animals.species === 'dog';
}) 



var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

var result = animals.Map((animal) => {
    return animal.species;
});

console.log(result);