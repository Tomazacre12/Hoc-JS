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


Array.prototype.every2 = function(callback){
    var output = true
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index],index,this)
            if (!result){
                output = false
                break
            }
        }
    }
    return output
}

var result = khoaHoc.every2(function(course,index,array){
    return course.isFinish
})
console.log(result)
