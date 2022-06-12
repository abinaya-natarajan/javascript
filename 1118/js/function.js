//return statement
let x = test(4, 3);

function test(a, b) {
    return a * b;
    console.log(x); // when javascript reaches a "return" statement
                    // the function will stop executing
}


// used as Variable values
let x = test1(4, 3);
function test1(a, b) {
    return a + b;
}
let result = 'The number is ' + x + ' value'; // first method

let result = 'The number is ' + test1(3, 3) + ' value'; // second method


// local variables inside a function
function localVar() {
    let car = 'Dodge';
    console.log(car); // Dodge - if we execute this code in browser console this will not print the value
}

console.log(car); // not defined



