// Khai báo biến
var canhBao = ('nội dung không giành cho trẻ em dưới 100 tuổi');
var canhBaoDeplay = ('Random bullshit message');
var infinity = ('Vô hạn giới ngữ');
// Gọi hàm thông báo
confirm (canhBao);
setTimeout(function(){
    alert (canhBaoDeplay);
}, 1000)
setInterval(function(){
    console.log(infinity + Math.random);
}, 100)
prompt('đây là 1 cái promt')