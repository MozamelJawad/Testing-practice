const { throwStatement } = require("@babel/types");

// First function to show string length
stringLength = (string) => string.length;

// second function to reverse string
reverseString = (string) => string.split("").reverse().join("");


// functions for add, subtract, muliply and divide
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    // add function 
    add = () => {
        return this.a + this.b;
    }

    // subtract function
    subtract = () => {
        return this.a - this.b;
    }

    // multiply function
    multiply = () => {
        return this.a * this.b;
    }

    // divide function
    divide = () =>{
        return this.a / this.b;
    }
}

module.exports = {stringLength, reverseString, Calculator };

