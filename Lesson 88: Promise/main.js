// Sync: đồng bộ

console.log(1)
console.log(2)

// Async: không đồng bộ

setTimeout(function(){
    console.log(3)
},1000)
console.log(4)