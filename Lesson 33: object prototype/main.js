function User (ho, ten, avatar){
    this.ho = ho;
    this.ten = ten;
    this.avatar = avatar;
}
User.prototype.className = 'Gensokyo'
User.prototype.getClassname = function() {
    return this.className
}

var user1 = new User('Kirisame', 'Marisa', 'avatar')
var user2 = new User('Udongein', 'Reisen', 'avatar')

console.log(user1)
console.log(user2.getClassname())