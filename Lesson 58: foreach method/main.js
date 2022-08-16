var number = [
    '01',
    '02',
    '03',
    '04'
]

Array.prototype.forEach2 = function(callback){
    for (var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index],index,this)
        }
    }
}
number.push('05','06')

number.forEach2(function(course, index, array){
    console.log(course, index,array)
})