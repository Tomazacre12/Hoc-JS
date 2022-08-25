var promise = new Promise(
    
    function(resolve, reject){
        // Thành công: resolve() => vào then
        // Thất bại: reject()   => vào catch
        resolve(1)
    }
)

promise
    .then(function(numstart){
        return numstart
    })
    .then(function(number){
        console.log(number)
        return ++number
    })
    .then(function(number){
        console.log(number)
        return ++number
    })
    .then(function(number){
        console.log(number)
        return ++number
    })
    .then(function(number){
        console.log(number)
    })
    .catch(function(){
        console.log('Oẳng!')
    })
    .finally(function(){
        console.log('Done!')
    })




function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms)
    })
}
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
    .then(function(){
        console.log(2)
        return sleep(1000)
    })
    .then(function(){
        console.log(3)
        return sleep(1000)
    })
    .then(function(){
        console.log(4)
        return sleep(1000)
    })
   