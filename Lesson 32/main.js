function User(ten, ho, avatar) {
    this.ten = ten
    this.ho = ho
    this.avatar = avatar
    this.hoTen = function() {
        return `${this.ho} ${this.ten}`
    }
}

var reimu = new User('Reimu', 'Hakurei', 'avatar')
var maid = new User('Sakuya', 'Izayoi', 'avatar')

console.log(reimu)
console.log(maid)

maid.spellCard = 'The World'
reimu.comment = 'Fantasy Seal'

console.log(reimu.hoTen())