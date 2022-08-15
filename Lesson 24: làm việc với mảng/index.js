var riderPhase1 = [
    "Kuuga",
    "Agito",
    "Ryuki",
    "Faiz",
]
var riderPhase2 = [
    "Faiz",
]
var riderPhase3 = [
    "Faiz",
    "Den o",
    "Kiva",
    "Decade",
]
var riderPhase4 = [
    "Fourze",
]
var riderPhase5 = [
    "Wizard",
    "G3",
    "Gattack",
    "Gaim",
    "Drive",
]
var riderPhase6 = [
    "Ghost",
    "Zio",
    "Build",
]
var riderPhase7 = [
    "Zero one",
]
var riderPhaseseven = [
    "Saber",
    "Revice"
]
var riderPhase8 = [
    "Zio",
    "Geats",
]

console.log(riderPhase1.pop()) //Xóa đi 1 phần tử cuối mảng và trả lại phần tử đã xóa 
console.log(riderPhase1)

console.log(riderPhase2.push('Blade', 'Hibiki')) //Thêm phần tử cuối mảng và trả về độ dài của mảng
console.log(riderPhase2)

console.log(riderPhase3.shift())  //Xóa 1 phần tử ở đầu mảng và trả lại phần tử đã xóa
console.log(riderPhase3)

console.log(riderPhase4.unshift('W', 'OOO')) //Thêm phần tử đầu mảng và trả về độ dài của mảng
console.log(riderPhase4)

riderPhase5.splice(1, 2)
console.log(riderPhase5)

riderPhase6.splice(1, 1, 'Ex aid')
console.log(riderPhase6)

console.log(riderPhase7.concat(riderPhaseseven)) //Hợp nhất mảng vế phải vào mảng vế trái

console.log(riderPhase8.slice(1, 2))

console.log(riderPhase1.join(' > '))
