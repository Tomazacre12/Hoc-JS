var result = 'a' && 'b' && 'c' && 'd'

console.log(result)

var result = 'a' && null && 'c' && 'd'

console.log(result)

if(result){
    console.log('Điều kiện đúng')
}
{
    console.log('Điều kiện sai')
}

var result = 'a' || 'b' || 'c' || 'd'

console.log(result)