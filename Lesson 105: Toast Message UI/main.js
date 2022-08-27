function toast({
tittle = ''
, message = '',
 type = 'Info'
, duration = 3000}){
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')
        const icons = {
            Sucess: 'fa-solid fa-check-circle',
            Info: 'fa-solid fa-circle-info',
            Warning: 'fa-solid fa-circle-exclamation',
            Error: 'fa-solid fa-circle-xmark',
        }
        const icon = icons[type]
        toast.classList.add('toast',`toast--${type}`)
        toast.innerHTML =
        `<div class="icon"><i class="${icon}"></i></div>
            <div class="body">
                <h3 class="tittle">${tittle}</h3>
                <p class="msg">${message}</p>
            </div>
        <div class="close"><i class="fa-solid fa-xmark"></i></div>`
        main.appendChild(toast)
    }
}


function showSuccessToast(){
    toast({
        tittle: 'Succes!',
        message: 'Anyone with access can view your invited visitors',
        type: 'Sucess',
        duration: 3000
    })
}
function showInfoToast(){
    toast({
    tittle: 'Info!',
    message: 'Anyone with access can view your invited visitors',
    type: 'Info',
    duration: 3000
})
}
function showWarningToast(){
    toast({
    tittle: 'Warning!',
    message: 'Anyone with access can view your invited visitors',
    type: 'Warning',
    duration: 3000
})
}
function showErrorToast(){
    toast({
    tittle: 'Error!',
    message: 'Anyone with access can view your invited visitors',
    type: 'Error',
    duration: 3000
})
}