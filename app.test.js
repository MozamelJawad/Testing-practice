const {stringLength, reverseString} = require('./modules/app');

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

describe('reverse String', () => {
    test('reverse the string', () => {
        expect(reverseString("Jawad")).toBe("dawaJ");
    });
});

