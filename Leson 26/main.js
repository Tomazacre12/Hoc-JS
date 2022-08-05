function thongBao(message,message2) {
    console.log(message);
    console.log(message2);
}
thongBao('randommessage','randommessage2')

function thongBao1() {
    console.log(arguments);
}
thongBao1('randommessage','randommessage2','randommessage3')

function thongBao2() {
    var myString ='';
    for
        (var param of arguments)
        {myString += `${param} -`}   
    console.log(myString)
}
thongBao2('randommessage','randommessage2','randommessage3')