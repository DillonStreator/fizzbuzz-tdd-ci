const FizzBuzz = require('../src/fizzbuzz');
const {valDivisibleBy} = require('../src/helpers/fizzbuzz.helpers');

describe("Fizz Buzz", function() {

    it("Should return a list of 100 items comma separated", function() {
        let fizzbuzz = FizzBuzz();
        expect(fizzbuzz.split(',').length).toEqual(100); 
    });

    it("Should convert numbers divisible by 3 to Fizz", function() {
        let fizzbuzz = FizzBuzz();
        const indexesDivisibleBy3 = fizzbuzz.split(',').filter( (fb, i) => valDivisibleBy(i+1)(3) );
        const containsFizz = indexesDivisibleBy3.every( el => el.indexOf('Fizz') !== -1 );
        
        expect(containsFizz).toEqual(true);
    });

});

