const FizzBuzz = require('../src/fizzbuzz');
const {divisibleBy} = require('../src/helpers/fizzbuzz.helpers');

describe("Fizz Buzz", function() {

    beforeAll(function() {
        this.fizzbuzz = FizzBuzz();
    });

    it("Should return a list of 100 items comma separated", function() {
        expect(this.fizzbuzz.split(',').length).toEqual(100); 
    });

    it("Should convert numbers divisible by 3 to 'Fizz'", function() {
        const indexesDivisibleBy3 = this.fizzbuzz.split(',').filter( (_, i) => divisibleBy(3)(i+1) );
        const containsFizz = indexesDivisibleBy3.every( el => el.indexOf('Fizz') !== -1 );
        
        expect(containsFizz).toEqual(true);
    });

    it("Should convert numbers divisible by 5 to 'Buzz'", function() {
        const indexesDivisibleBy5 = this.fizzbuzz.split(',').filter( (_, i) => divisibleBy(5)(i+1) );
        const containsBuzz = indexesDivisibleBy5.every( el => el.indexOf('Buzz') !== -1 );

        expect(containsBuzz).toEqual(true);
    });

    it("Should convert numbers divisible by both 5 and 3 to 'Fizz Buzz'", function() {
        const indexesDivisibleBy3And5 = this.fizzbuzz.split(',').filter( (_, i) => divisibleBy(3,5)(i+1) );
        const containsFizzBuzz = indexesDivisibleBy3And5.every( el => el.indexOf('Fizz Buzz') !== -1 );

        expect(containsFizzBuzz).toEqual(true);
    });

});

