function thongBao(hoTen,canhBao) {
    console.log(hoTen);
    alert(canhBao)
}
thongBao('Ngọc Long','đây là 1 cái cảnh báo')

function thongBao1() {
    console.log(arguments);
}
thongBao1('randommessage','randommessage2','randommessage3')


function thongBao2() {
    var myString = '';
    for (var vongLap of arguments){
        myString += `${vongLap}, `
    } 
    console.log(myString)
}
thongBao2('log1','log2','log3')