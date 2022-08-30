Array.prototype.reduce2 = function(callback, result){
    let x = 0
    if (arguments.length < 2){
        x = 1
        result = this[0]
    }
    for (let x = 0; x < this.length; x++){
        result = callback(result, this[x], x, this)
    }
    return result
}

const number = [1,2,3,4,5,6]

const result = number.reduce2((total, number) =>{
    return total + number
})

console.log(result)