var khoaHoc = [
    {
        name: 'Css',
        coin: 200
    },
    {
        name: 'Html',
        coin: 600
    },
    {
        name: 'Js',
        coin: 800
    }
]

var filterCourse = khoaHoc.filter(function(course, index, array){
    return  course.coin > 500
})

console.log(filterCourse)