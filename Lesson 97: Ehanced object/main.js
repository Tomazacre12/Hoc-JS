var language = 'JavaScript'
var price = 1000

var course = {
    language,
    price,
    getName(){
        return language
    }
}

console.log(course.getName())

var fieldName = 'name'
var fieldPrice = 'price'

var course2 = {
    [fieldName]: 'Js',
    [fieldPrice]: 1000
}

console.log(course2)