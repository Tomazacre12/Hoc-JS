function coutDown(num){
    if(num > 0){
        console.log(num)
        return coutDown(num - 1)
    }
    return num
}
coutDown(10)

function giaiThua(num){
    var output = 1
    for (var x = num; x > 0; x--){
        output = output * x
    }
    return output
}
console.log(giaiThua(6))

function giaiThuaDeQuy(num){
    if (num > 0){
        return num * giaiThuaDeQuy(num - 1)
    }
    return 1
}
console.log(giaiThuaDeQuy(3))