const fizzBuss = require('./index')

test("1を渡すと文字列'1'を返す", ()=>{
    // 準備(Arrange)
    const input = 1
    const expectation = '1'
    // 実行(Act)
    const actual = fizzBuss(input)
    // 検証(Assertion)
    expect(actual).toBe(expectation)
})

test("2を渡すと文字列'2'を返す", ()=>{
    // 準備(Arrange)
    const input = 2
    const expectation = '2'
    // 実行(Act)
    const actual = fizzBuss(input)
    // 検証(Assertion)
    expect(actual).toBe(expectation)
})

test("3を渡すと文字列'Fizz'を返す", ()=>{
    // 準備(Arrange)
    const input = 3
    const expectation = 'Fizz'
    // 実行(Act)
    const actual = fizzBuss(input)
    // 検証(Assertion)
    expect(actual).toBe(expectation)
})

test("5を渡すと文字列'Buzz'を返す", ()=>{
    // 準備(Arrange)
    const input = 5
    const expectation = 'Buss'
    // 実行(Act)
    const actual = fizzBuss(input)
    // 検証(Assertion)
    expect(actual).toBe(expectation)
})

test("15を渡すと文字列'FizzBuss'を返す", ()=>{
    // 準備(Arrange)
    const input = 15
    const expectation = 'FizzBuss'
    // 実行(Act)
    const actual = fizzBuss(input)
    // 検証(Assertion)
    expect(actual).toBe(expectation)
})