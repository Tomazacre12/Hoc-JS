function User(ten, ho, pass) {
    this.ten = ten
    this.ho = ho
    this.pass = pass
    this.hoTen = function() {
        return `${this.ho} ${this.ten}`
    }
    this.matKhau = function() {
        return `${this.pass}`
    }
}

var admin = new User('Hiếu', 'Hà', '11ad5a1s4a51s5ad')
var guest = new User('Quang', 'Vũ', 'as2x62as65as62a6')

console.log(admin)
console.log(guest)

admin.id = '29381029ie9190'
guest.id = '30wkwa93i9'

console.log(admin.matKhau())
console.log(admin.hoTen())