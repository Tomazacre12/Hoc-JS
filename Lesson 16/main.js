var x = 1
var y = 2
var z = 3
var correct = 'Điều kiện đúng!'
var fallse = 'Điều kiện sai!'

if(x + y == z && y > x){
    console.log (correct)
}
else{
        console.log(fallse)
    }

if(x + y == z || y < x){
        console.log (correct)
    }
else{
            console.log(fallse)
}

if(!(y < z)){
    console.log (correct)
}
else{
        console.log(fallse)
}
