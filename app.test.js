const {stringLength, reverseString, Calculator, capitalize} = require('./modules/app');

// string length test 
describe('string length', () => {
    test('is count the string', () => {
      expect(stringLength("Jawad")).toBe(5);
    });

    test('The string length is less than or equal to 10', () => {
        expect(stringLength("Helo Jawad")).toBeLessThanOrEqual(10);
      });

      test('The string length is equal or more than 1', () => {
        expect(stringLength("H")).toBeGreaterThanOrEqual(1);
      });

});

// reverse string test
describe('reverse String', () => {
    test('reverse the string', () => {
        expect(reverseString("Jawad")).toBe("dawaJ");
    });
});

// Calculator functions testing
describe('Calculator functions', () => {
    test('The result of the "Add" function should be 15', () => {
        expect(new Calculator(12,3).divide()).toBe(4);
    });

    test('The result of the "Subract" function should be 9', () => {
        const result = new Calculator(12, 3);
        expect(result.subtract(12,3)).toBe(9);
    });

    test('The result of the "Multiply" function should be 36', () => {
        const result = new Calculator(12,3);
        expect(result.multiply()).toBe(36);
    });

    test('The result of the "Divide" function should be 4', () => {
        result = new Calculator(12,3);
        expect(result.divide()).toBe(4);
    });
});


// test capitalize function

describe('Capitalie String', () => {
    test('The first letter of "jawad" should be "Jawad"', () => {
        expect(capitalize("jawad")).toBe("Jawad")
    });
});
