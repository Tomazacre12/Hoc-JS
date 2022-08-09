var x = 0
var isSuccess = false

do {
    x++
    console.log('Nạp thẻ lần' + x)
    if (false){
        isSuccess = true
    }

} while (!isSuccess && x <= 3)