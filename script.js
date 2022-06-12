// function myFunction() {
//     // var hour = new Date().getHours();
//     // var greeting;
//     // if(hour < 18) {
//     //     greeting = 'Good day';
//     // } else {
//     //     greeting = 'Good evening';
//     // }
//     // document.getElementById('demo').innerHTML = greeting;

//         var greeting;
//         var time = new Date().getHours();
//         if (time < 10) {
//             greeting = 'Good Morning';
//         } else if (time < 20) {
//             greeting = 'Good day!!!';
//         } else {
//             greeting = 'Good Afternoon';
//         }
//         document.getElementById('demo').innerHTML = greeting;
// }


// var day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
//     default:
//         day = 'Looking forward for the weekend';
// }
// document.getElementById('demo').innerHTML = day;

// var i;
// var text = '';

// for(i=0; i<5; i++) {
//     // text += 'The number is: ' + i + '<br/>';

//     text += `The number is: ${i} <br/>` 
// }

// document.getElementById('demo').innerHTML = text;


// function outerFunction() {
//     var a = 10;

//     return function innerFunction() {

//     }
// }


// var a = 4;

// function myFunction() {
//     return a * a;
// }

// console.log(myFunction());


// var counter = 0;

// function add() {
//     var counter = 0
//     counter += 1;
//     return counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());


// function adding() {
//     var counter = 0;

//     function plus() {
//         counter += 1;
//     }

//     plus();
//     return counter;
// }


// var add = (function() {
//     var counter = 0;
//     return function() {
//         counter += 1;
//         return counter;
//     }
// })();


// function outer() {
//     var b = 10;

//     function inner() {
//         var a = 20;
//         console.log(a+b);
//     }
//     return inner;
// }

// var x = outer();


// function outer() {
//     var c = 20;

//     function inner() {
//         var d = 10;
//         c+1;
//         d+1;
//     }
//     return inner;
// }

// var s = outer();

// console.log(s());


// function addition() {
//     var num = 1;

//     function test() {
//         num += 1;
//         console.log(num);
//     }
//     return test;
// }
// var result = addition();
// result();
// result();
// result();



function Date(brand) {
    this.name = brand;
}

Date.prototype.getMyName = function() {
    alert(this.name);
}

var car = new Date('Jeep');

var car = {
    name: 'jeep',
    getMyName: function() {
        alert(this.name);
    }
};

var objects = [
    {
        name: 'Chrysler',
        models: ['Pacifica', 'Pacifica Hybrid', '300']
    },

    {
        name: 'Jeep',
        models: ['Wrangler', 'Renegade', 'Cherokee']
    }
]

function Car(obj) {
    this.name = obj.name;
    this.model = obj.models;
    this.getName = function() {

    };

    this.setName = function() {
        
    };
}

var jeep = new Car(object[1]);

var chrysler = new Car(object[0]);

var brands = [];

for(i=0; i<objects.length - 1; i++) {
    brands.push(new Car(objects[i]));
}


var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

var officer = [];
let i;
for(i=0; i< officers.length; i++) {
    officer.push(officers[i].id);
}
console.log(officer);

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

var officersIds = officers.map(function (officer) {
    return 'Jeep Wrangler'
  });


  var person = {fname:"John", lname:"Doe", age:25};

  var text = '';

  var x;

  for(x in person) {
      text += person[x] + ' ';
  }

var cars = ['BMW', 'Volvo', 'Mini'];

var i;

for(i of cars) {
    console.log(i);
}



var test = '';
var i=0;

while(i<5) {
    test += i;
    i++;
}


var testing = '';

var i=0;

do {
    testing += i;
    i++;
}

while (i<5);
 