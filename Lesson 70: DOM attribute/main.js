var headingElement = document.querySelector('h1')
headingElement.title = 'heading'
headingElement.className = 'heading-text'
console.log(headingElement)

var link = document.querySelector('a')
link.href = 'heading'
console.log(link)
link.setAttribute('style','text-decoration: none;')

console.log(link.getAttribute('class'))
console.log(link.getAttribute('href'))