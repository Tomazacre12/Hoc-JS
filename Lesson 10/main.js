var a = 5
var b = 6
var number = a-- + ++a
var number2 = ++b - b--
var number3 = --a - ++b + b-- - a++
var number4 = a++ + b-- + a + --b - --a

console.log(number)
// 5 + 5 = 10
console.log(number2)
// 7 - 7 = 0 
console.log(number3)
// 4 - 7 + 7 - 4 = 0
console.log(number4)
// 5 + 6 + 6 + 4 - 5 = 16