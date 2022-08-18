var headingElement =
    document.querySelector('h1')
headingElement.textContent = 'string' //seter
console.log(headingElement.textContent)  //geter

var text =
    document.querySelector('.wrap')
console.log(text.textContent) // hiển thị cả code
console.log(text.innerText)   // chỉ hiển thị những gì có trên web