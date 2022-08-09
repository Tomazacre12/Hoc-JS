var courses =[
    {
        id: 1,
        name:'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name:'CSS',
        coin: 0,
    },
    {
        id: 3,
        name:'HTML',
        coin: 250,
    },
    {
        id: 4,
        name:'Ruby',
        coin: 250,
    },
    {
        id: 5,
        name:'CSS',
        coin: 0,
    },
]

courses.forEach(function(course, index){
    console.log(index,course)
})

var isFree = courses.every(function(course, index){
    return course.coin === 0
})

console.log(isFree)

var course = courses.find(function(course, index){
    return course.name === 'CSS'
})

console.log(course)

var course = courses.filter(function(course, index){
    return course.name === 'CSS'
})

console.log(course)