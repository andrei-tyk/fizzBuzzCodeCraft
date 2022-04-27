function Fizz(numbers) {
    if(!Array.isArray(numbers)) {
        return numbers
    }
    for(let i in numbers) {
        if(typeof numbers[i] === 'number') {
            if(numbers[i] % 3 === 0) {
                numbers[i] = 'Fizz'
            }
        }
    }
    return numbers
}

module.exports = Fizz
