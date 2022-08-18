var inputElement =
document.querySelector('.input1')

var inputValue
inputElement.oninput = function(e){
    inputValue = e.target.value
}

var checkElement =
document.querySelector('input[type="checkbox"]')

checkElement.onchange = function(e){
    console.log(e.target.checked)
}

var checkOption =
document.querySelector('select')

checkOption.onchange = function(e){
    console.log(e.target.value)
}

var keyupElement =
document.querySelector('.input2')

keyupElement.onkeyup = function(e){
    console.log(e.target.value )
}

document.onkeydown = function(e){
    switch(e.which){
        case 27:
            console.log('EXIT')
            break;
        case 13:
            console.log('ENTER')
            break
    }
}