var element = document.querySelector('.wrap')
element.classList.add('blue')
console.log(element.classList)
console.log(element.classList.contains('blue'))
setTimeout(() => {
    element.classList.remove('blue')
    // element.classList.toggle('red')
},3000)

var text2 = document.querySelector('.text2')
text2.classList.add('blue')
setInterval(() => {
    text2.classList.toggle('red')
},300)