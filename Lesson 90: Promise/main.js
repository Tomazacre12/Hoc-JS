var promise = new Promise(
    function(resolve, reject){
        // Thành công: resolve() => vào then
        // Thất bại: reject()   => vào catch
        resolve([
            {
                id: 1,
                name: 'JavaScript'
            }
        ])
    }
)

promise
    .then(function(course){
        console.log(JSON.stringify(course) + 'Súc Xích!')
    })
    .catch(function(){
        console.log('Oẳng!')
    })
    .finally(function(){
        console.log('Done!')
    })