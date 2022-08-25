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
        return new Promise (function(resolve, reject){
            reject()
        })
    })
    .then(function(){
        console.log(4)
        return sleep(1000)
    })
    .catch(function(){
        console.log('oẳng!')
    })

// Promise.resolve
var promise = Promise.resolve('xúc xích')

promise
    .then(function(Success){
        console.log('Result: ', Success)
    })

// Promise.reject
var promise2 = Promise.reject('oẳng')

promise2
    .catch(function(Error){
        console.log('Result:',Error)
    })

// Promise.all
var promise3 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1])
        },2000)
    }
)
var promise4 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2, 3])
        },5000)
    }
)
Promise.all([promise3, promise4])

    .then(function(Result){
        var result1 = Result[0]
        var result2 = Result[1]

        console.log(result1.concat(result2))
    })