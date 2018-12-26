
const {divisibleBy} = require('../src/helpers/fizzbuzz.helpers');

describe("#divisibleBy", function() {

    it("Should tell if numbers are divisible", function() {
        expect( divisibleBy(5)(10) ).toEqual(true);
        expect( divisibleBy(5)(11) ).toEqual(false);
    });

    it("Should accept only numbers as the divisor", function() {
        expect( divisibleBy('a')(10) ).toEqual(false);
        expect( divisibleBy([5,'a'])(10) ).toEqual(false);
    });

    it("Should accept multiple divisor inputs and return if every divisor is divisible by the dividend", function() {
        expect( divisibleBy(5,10)(20) ).toEqual(true);
        expect( divisibleBy(5,11)(20) ).toEqual(false);
        expect( divisibleBy([5,10])(20) ).toEqual(true);
        expect( divisibleBy([5,11])(20) ).toEqual(false);
    });

});

