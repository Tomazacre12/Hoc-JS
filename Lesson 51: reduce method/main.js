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

console.log(tongSoTien)

var x = 0

function coinHandler(accumulator, currentValue, currentIndex, originArray){
    x++
    var total = accumulator + currentValue.coin
    console.table({
        'Lượt chạy:': x,
        'Biến tích trữ:': accumulator,
        'Giá:': currentValue.coin,
        'Tích trữ:': total
    })
    return total
}
var thuTien = courses.reduce(coinHandler, 0)

var thuTien2 = courses.reduce(function(total, currentValue){
    return total + currentValue.coin
}, 0)

console.log(thuTien2)