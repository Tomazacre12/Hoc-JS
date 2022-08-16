var element = [
    'Fire',
    'Water',
    'Wind',
    'Earth'
]

// var elements = element.map(function(element){
//     return `<p>${element}</p>`
// })

// console.log(elements.join(' '))

Array.prototype.map2 = function(callback) {
    var output = [], chieuDai = this.length
    for (var x = 0; x < chieuDai; ++x){
        var result = callback(this[x],x)
        output.push(result)
    }
    return  output
}

var elements = element.map2(function(element){
    return `<p>${element}</p>`
})

console.log(elements.join(' '))