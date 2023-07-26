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

// Capitalize function
    const capitalize = (string) => {
        const newArray = string.split('');

        const newCharArray = newArray.map((char, i) => {
        if (i === 0) {
            return char.toUpperCase();
        }
        return char;
        });

        const capitalizeString = newCharArray.join('');
        return capitalizeString;
    };


module.exports = {stringLength, reverseString, Calculator, capitalize };

