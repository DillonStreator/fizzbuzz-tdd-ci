const flattenDeep = arr => arr.reduce((acc,curr) => Array.isArray(curr) ? curr.concat(flattenDeep(curr)) : acc.concat(curr) ,[]);

module.exports = {
    divisibleBy: (...divisors) => val => {
        divisors = flattenDeep(divisors);

        return divisors.every( divisor => (typeof divisor === 'number') && ((val % divisor) === 0) )
    }
}

