var emailKey = 'gmail'

var hoSo = {
    hoTen: 'Hà Vũ Hiếu',
    tuoi: '1700',
    diaChi: 'Hà Nội',
    [emailKey]: 'shadow12122004@gmail.com',
    layDiachi: function() {
        return this.diaChi
    }
};

hoSo.sdt = '0987239988'

delete hoSo.tuoi

console.log(hoSo)

console.log(hoSo.hoTen)

console.log(hoSo.layDiachi())