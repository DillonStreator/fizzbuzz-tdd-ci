
const { valDivisibleBy } = require('./helpers/fizzbuzz.helpers');

module.exports = (length=100) => {

    let fizzbuzz = [];

    for (let i = 1; i <= length; i++) {
        if (valDivisibleBy(i)(3)) fizzbuzz.push('Fizz');
        else fizzbuzz.push(i);
    }

    return fizzbuzz.join(',');

}
