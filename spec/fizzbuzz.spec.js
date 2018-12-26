const FizzBuzz = require('../src/fizzbuzz');

describe("Fizz Buzz", function() {

    it("Should return a list of 100 items comma separated", function() {
        let fizzbuzz = FizzBuzz();
        expect(fizzbuzz.split(',').length).toEqual(100); 
    });

});

