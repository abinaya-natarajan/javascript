function add(number) {
    if(number<=0) {
        return 0;
    } else {
        return number + add(number - 1);
    }
}

add(3);


var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
        
}
        
var getName = obj.getName; // var getName = function(){console.log(this.name)//vivek}
        
var obj2 = {name:"akshay", getName }; 
//  var obj2 = {
//     name: 'akshay',
//     getName: function() {
//         console.log(this.name);
//     }
// }


obj2.getName();



(function() {
    alert('I am an IIFE');
})();



//pass by value

var a = 2;
var b =  a;


//pass by reference
var obj1 = {
    name: 'jeep',
    price: 4
};

var obj2 = obj1;


Recursion

