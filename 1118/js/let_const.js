let x = 10;
let x = 'string';

let y;
let y = 20;
// Let variable cannot be redeclared


carName = 'Wagoneer';
let carName;

carModel = 'Sport S';
let carModel = 'Sport X';
// cannot use the variable before it is declared or initialized


const test = 1;
const test = 2;

const test1;
test1 = 4;
// cannot reassigned and value must be assigned when it is declared


const alpha = ['a', 'b', 'c'];
alpha[0] = 'd';

alpha.push('e');
// can change the element of a constant array and can add a new element

const obj1 = {
    car: 'fiat',
    model: '500',
    rooftop: 'yes'
};
obj1.car = 'dodge';
obj1.wheels = '4';
// similarly can change the properties of an object and can add a new property


const beta = ['ab', 'cd', 'ef'];
beta = ['gh', 'ij', 'kl'];   //error
// cannot reassign the array


const obj2 = {
    fname: 'x',
    lname: 'y',
    age: 12
};

const obj2 = {
    store: 'market',
    grocery: 23
};
// similarly cannot reassign the object













