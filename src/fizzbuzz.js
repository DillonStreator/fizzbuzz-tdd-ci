
const { divisibleBy } = require('./helpers/fizzbuzz.helpers');

module.exports = (length=100) => {

    let fizzbuzz = [];

    for (let i = 1; i <= length; i++) {
        if ( divisibleBy(3,5)(i) ) fizzbuzz.push('Fizz Buzz');
        else if ( divisibleBy(5)(i) ) fizzbuzz.push('Buzz');
        else if ( divisibleBy(3)(i) ) fizzbuzz.push('Fizz');
        else fizzbuzz.push(i);
    }

    return fizzbuzz.join(',');

}
