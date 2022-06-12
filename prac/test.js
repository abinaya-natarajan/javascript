var arr = [];

arr.push('bar');

arr.unshift('bar');

arr.length = 'bar1'


x = 5;

console.log(x);

var x;


var x;
console.log(x);
x = 7;


for (var i=0;i<3;i++) {
    setTimeout(function() {
        alert(i);
    }, 1000 + i);
}


for (var i=0;i<3;i++) {
    setTimeout(function(i_local) {
        return function() {
            alert(i_local);
        }
    }(i), 1000 + i);
}


var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27



function createBase(a) {
    return function(b) {
        return a + b;
    }
}

var addSix = createBase(6);
addSix(10);



//private counter

function counter() {
    var _counter = 0;

    return {
        add: function(increment) {
            _counter += increment;
        },
        retrieve: function() {
            return 'The counter is currently at: ' + _counter;
        }
    }
}

var c = counter();
c.add(3);



function countertest() {
    var a = 0;
    return function(num) {
        return a += num;
    }
}

var result = countertest();
result(3);


console.log(text);
var text = 'outside';
function logIt(){
    console.log(text);
    var text;
};
logIt();



var str = "HELLO WORLD";
var result = str.charAt(1);


var str = "I have become an front end developer in a permanent position";
str.endsWith('developer');

var str1 = "a b c d";
var str2 = "e f g h";
var result = str1.localeCompare(str2);

var str = "Hello world!";
var str2 = str.repeat(1);


var str = "Hello world!";
var res = str.slice(-1, 5);


// fetch('url')
// .then(function(response) {
//     // return response;
//     console.log(response);
// })
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// })

let testing = async() => {
    var data = await fetch('url');
    console.log(data);
    console.log('I am waiting...');
}

testing();

console.log('I am not waiting!');

function fetch(url) {
    
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if(url === 'url'){
                resolve(url);
            } else {
                reject('error 001');
            }
        }, 2000);

    })
}


var test = new XMLHttpRequest();
test.open("GET", 'https://www.abc.com');
test.send();



function changeDoc(data, func) {
    document.getElementById("demo").innerHTML = data;
    func();
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        changeDoc(this.responseText, function(){});
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }


  let promise = new Promise(function(resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // changeDoc(this.responseText, function(){});
        resolve('success');
      } else if(this.status == 400) {
            reject('error');
      }
    };
    xhttp.open("GET", "", true);
    xhttp.send();

  })

  promise.then()



  function test(url) {
      return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // changeDoc(this.responseText, function(){});
            resolve('success');
          } else if(this.status == 400) {
            reject('error');
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    
      })
  }


  let result = test('https://www')
  result.then(function(response){
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  })


async function testing() {
    try {
        var test1 = await test();
        var test2 = await test1;
        console.log(test2);
    }catch (error) {
        console.log(error);
    }
}



let reverseString = (str) => {
    if(str === ''){
        return '';
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}


reverseString('hello');



var a = 10;
setTimeout(function() {
    console.log('test');
}, 0);
console.log(a);


for (var i = 0; i < 4; i++) {
    
}



// setTimeout(() => console.log(i), 0)



function Dog (name) {
    this.name = name
  }

  Dog.bark = function () {
    console.log(this.name + ' says woof')
  }

  let fido = new Dog('fido'); 

  // fido = {
      name: fido,
      bark: function() {
          console.log(this.name)
      }
  }


  fido.bark()


  for(var i=0;i<5;i++) {
      (function(i) {
        setTimeout(function() {
            console.log(i);
          }, 0);
      })(i);

  }


var arr = [1,2,3,4];
var result = 0; 

for(var i=0;i<arr.length;i++) {
    result = result + arr[i];  
}

console.log(result);


var arr = [1,2,3,4];
var result = arr.reduce(function(acc, currentValue) {
    return acc + currentValue;
});

console.log(result);


var arr = [1,2,3,4];

var result = arr.filter(function(num) {
    return num >= 2;
});
console.log(result);


var arr = [1,2,3,4];
var result = arr.map(function(num) {
    return num * 2;
});
console.log(result);



function counter() {
    var count = 0;
    return function() {
        return count += 1;
    }
}

var result = counter();
result(); //1
result(); //2


(function(){
    alert('i am an IIFE');
})();



let reference = (function() {   
    let secret = "I cannot be changed by simple assignment";    
     return {     
          //ES5 new method syntax
          change(value) {       
            secret = value;     
          },      
          get secret() {       
            return secret;     
          }   
        }; 
      })();  
 console.log(reference.secret); // "I cannot be changed by simple assignment"
 reference.change("I am changed"); 
 console.log(reference.secret); // "I am changed"



function outer(a) {
    return function(b) {
        return a + b;
    }
}

outer(2)(3);


var test = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    }
})();





var ref = (function() {
    var private = 'I am private';
    return {
        sayMyName: function() {
            alert('My Name: ' + private);
        },
        changePrivate: function() {
            private = 'I am changed';
        }
    };
})();

ref.sayMyName();
ref.changePrivate();
ref.sayMyName();




function test() {
    var private = 'I am private';
    return {
        sayMyName: function() {
            alert('My Name: ' + private);
        },
        changePrivate: function() {
            private = 'I am changed';
        }
    };
}

var result = test();
result.sayMyName();
result.changePrivate();
var res1 = test();
res1.sayMyName();



test();




function person() {
    var name = 'John';
    var age = 30;
    var country = 'US';

    return {
        name: name + country,
        age: age,
        setAge: function(age) {
            age = age
        }
    };
}

var ps1 = person(); // {name: john}
ps1.name = 'Hari';
console.log(ps1.age);
ps1.setAge(40);
console.log(ps1.age);




function EmployeeDetails() {
    var name = "Mayank";
    var age = 30;
    var designation = "Developer";
    var salary = 10000;  //11000
  
    var calculateBonus = function(amount) {
      return salary = salary + amount;
    }
  
    return {
      name: name,
      age: age,
      designation: designation,
      calculateBonus: calculateBonus 
    }
  }
  
  var newEmployee = EmployeeDetails() 

var result = newEmployee.calculateBonus(1000);  
console.log(result);
newEmployee.calculateBonus(1000); 



var singleton = (function() {
    var instance; //{} {firstName: 'john'}

    function test1() {
        return  {firstName: 'john'};
    }

    return {
        createInstance: function() {
            if(!instance) {
                instance = test1();
            }
            return instance;
        }
    }
})();

var result = singleton.createInstance();
var result1 = singleton.createInstance();
console.log(result === result1);



function test() {
    console.log(a);
    if(true){
        var a;
    }

}

test();


test2();
const test2 = () => {
    alert('Arrow function');
}

function test() {
    handle = () => {

    }
}


var obj1 =  new test();


let sayHello = _ => console.log("hi, I am arrow function without argument");


function greeting() {
    console.log('hello world');
}

greeting();


var arr = [1,2,3,4];

var result = [];

for(var i=0;i<arr.length;i++) {
    result.push(arr[i] * 2);
}

console.log(result);



var arr = [1,2,3,4];
for(var i=0;i<arr.length;i++) {
    console.log(arr[i] * 2);
}


var arr1 = [1,2,3,4];
for(var i=0;i<arr.length;i++) {
    arr1[i] * 2;
}









