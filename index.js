const fizzBuss = (num) => {
    if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuss'
    }
    if(num % 3 === 0){
        return 'Fizz'
    }
    if(num % 5 === 0){
        return 'Buss'
    }
    return num.toString()
}

module.exports = fizzBuss