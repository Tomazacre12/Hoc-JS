var text2 = document.querySelector('.text2')
text2.onclick = function(){
        text2.classList.add('blue')
        setInterval(() => {
            text2.classList.toggle('red')
        },300)
    }

var domEvent = document.querySelectorAll('p')
for (var x = 0; x < domEvent.length; ++x){
    domEvent[x].onclick = function(e){
        console.log(e.target)
    }
}