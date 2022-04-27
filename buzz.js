function Buzz(numbers) {
    if(!Array.isArray(numbers)) {
        return numbers
    }
    for(let i in numbers) {
        if(typeof numbers[i] === 'number') {
            if(numbers[i] % 5 === 0) {
                numbers[i] = 'Buzz'
            }
        }
    }
    return numbers
}

module.exports = Buzz