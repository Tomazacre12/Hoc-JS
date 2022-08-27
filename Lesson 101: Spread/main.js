function logger({name, lesson, price, ...rest}){
    console.log(name)
    console.log(lesson)
    console.log(price)
    console.log(rest)
}
logger({
    name: 'Html',
    lesson: 111,
    price: 0,
    author: 'F8',
    desc: 'content'
})   

var array1 = ['PHP','Html','Ruby']
var array2 = ['Css','JavaScript','NodeJs']
var array3 = [...array1, ...array2]
console.log(array3)

var object1 = {
    name: 'Eiki Shiki'
}
var object2 = {
    age: 3000
}
var object3 = {
    ...object1,
    ...object2
}
console.log(object3)

var defaultConfig = {
    name: 'rumiaMk1',
    id: '192.168.0.1',
    role: 'admin'
}
var exerciseConfig = {
    ...defaultConfig,
    id: '192.168.0.2'
}
console.log(exerciseConfig)

var array4 = ['Js', 'Html', 'Ruby']
function loggger(...rest){
    for(let i in rest){
        console.log(rest[i])
    }
}
loggger(...array4)