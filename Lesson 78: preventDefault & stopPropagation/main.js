// preventDefault
var aElements =
    document.querySelectorAll('a')

for (var i = 0; i < aElements.length; i++){
    aElements[i].onclick = function(e){
        if (!e.target.href.startsWith('https://www.youtube.com/user/HowToBasic/videos')){
            e.preventDefault()
        }     
    }
}

var ulElement = document.querySelector('ul')
ulElement.onmousedown = function(e){
    e.preventDefault()
}
ulElement.onclick=
    function(e){
        console.log(e.target)
    }
// stopPropagation
document.querySelector('div').onclick=
    function(){
        console.log('DIV')
    }
    
document.querySelector('button').onclick=
    function(e){
        e.stopPropagation()
        console.log('click')
    }