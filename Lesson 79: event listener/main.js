// xử lý nhiều việc khi 1 event xảy ra
var btn = document.getElementById('btn')
btn.onclick = function(){
    console.log('task1')
    console.log('task2')
    alert('task3')
}
// lắng nghe, hủy bỏ lắng nghe
var btn2 = document.getElementById('btn2')
    btn2.onclick = function(){
        console.log('task1')
        console.log('task2')
        alert('task3')
    }
setTimeout(function() {
    btn2.onclick = function () {}
    btn2.classList.add('opacity')
},3000)
// event listener
var btn3 = document.getElementById('btn3')
function task1(){
    console.log('task1')
}
btn3.addEventListener('click', task1)
// event listener: hủy bỏ lắng nghe sau 3s
var btn4 = document.getElementById('btn4')
function task1(){
    console.log('task1')
}
function task2(){
    console.log('task2')
}
btn4.addEventListener('click', task1)
btn4.addEventListener('click', task2)
setTimeout(function(){
    btn4.removeEventListener('click', task1)
},3000)