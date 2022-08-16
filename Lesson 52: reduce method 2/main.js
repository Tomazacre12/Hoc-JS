var courses =[
    {
        id: 1,
        name:'Javascript',
        coin: 915,
    },
    {
        id: 2,
        name:'CSS',
        coin: 210,
    },
    {
        id: 3,
        name:'HTML',
        coin: 581,
    },
    {
        id: 4,
        name:'Ruby',
        coin: 121,
    },
    {
        id: 5,
        name:'CSS',
        coin: 204,
    },
]

var tongSoTien = 0

for (var course of courses){
    tongSoTien += course.coin
}

var number = [
    915,
    120,
    581,
    945,
    122,
    204,
]

var tongCong = number.reduce(function(total,number){
    return total + number
},0)

console.log(tongCong)

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
}, [])
console.log(depthArray)
console.log(flatArray)

