const logger = log => {
    console.log(log)
}
logger('arrown function')

var sum = (num1, num2) => num1 + num2

console.log(sum(100, 100))


var object = (a,b) => ({name: a, age: b})

console.log(object("Hieu Vux","17"))