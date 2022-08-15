var x = 0
var theNap = {
    maThe: 'xfjaoei',
    serial: '0915210581'
}
var isSuccess = theNap.maThe ==='xfjaoei' && theNap.serial === '0915210581'?true:false
console.log(isSuccess)

do {
    x++
    if(isSuccess){
        console.log('Nạp thẻ lần'+' '+x+':'+' Thành công')
    }else{
        console.log('Nạp thẻ lần'+' '+y+':'+' Thất bại')
    }

} while (!isSuccess && x <= 3)
console.log(!isSuccess)

var y = 0
var theNap2 = {
    maThe: 'xfjaoei',
    serial: '0915210582'
}
var isSuccess2 = theNap2.maThe ==='xfjaoei' && theNap2.serial === '0915210581'?true:false
console.log(isSuccess2)

do {
    y++
    if(isSuccess2){
        console.log('Nạp thẻ lần'+' '+y+':'+' Thành công')
    }else{
        console.log('Nạp thẻ lần'+' '+y+':'+' Thất bại')
    }

} while (!isSuccess2 && y <= 3)
console.log('thằng thất bại')