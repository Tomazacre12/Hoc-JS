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

function courseHandler(course){
    return{
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá ${course.coin}`
    }
}

var newCourses = courses.map(courseHandler)

console.log(newCourses)

function courseHandler2(courses){
    return `<h2>${courses.name}</h2>`
}

var htmlCourses = courses.map(courseHandler2)

console.log(htmlCourses.join(' '))
