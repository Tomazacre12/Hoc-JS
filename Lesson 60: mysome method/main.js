var khoaHoc = [
    {
        name: 'Css',
        coin: 200,
        isFinish: true
    },
    {
        name: 'Html',
        coin: 600,
        isFinish: true
    },
    {
        name: 'Js',
        coin: 800,
        isFinish: false
    }
]

Array.prototype.some2= function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return true
            }
        }
    }
    return false
}

var filterCourse = khoaHoc.some2(function(course, index, array){
    return  course.isFinish
})

console.log(filterCourse)