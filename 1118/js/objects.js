// methods are stored in properties as function definitions
const person = {
    firstName: 'a',
    lastName: 'b',
    id: 40,
    fullName: function() {
        return this.firstName + this.lastName;
    }
}

//do not declare string, number & boolean as objects (using "new" keyword method)
let x = new String();

