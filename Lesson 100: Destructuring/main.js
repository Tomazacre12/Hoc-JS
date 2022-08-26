var array = ['Ruby', 'CSS' ,'Rose', 'JavaScript', 'HTML']
var [a, , b, ...rest] = array
console.log(a, b)
console.log(rest)

var courses = {
    name: 'HTML/CSS',
    price: 1000,
    lesson: '111',
    // desc: 'chỉ là 1 description rách',
    time: '1 months',
    author: 'F8'
}
var {name, price, lesson, desc = '404 not found', ...rest} = courses
console.log(name, price, desc, rest)

function logger(...params){
    console.log(params)
}
logger(1,2,3,4,5,6,7,8,9)   