// Code thuần: var
// Babel: const, let
// Khi định nghĩa và không gán lại biến đó: const
// Khi cần gán lại giá trị cho biến: let
{
    var a1 = 'var'
}
console.log(a1)

{
    const a2 = 'const,let'
    console.log(a2)
}
// console.log(a2): Uncaught


// scope, hosting:
b1 = 'var'
var b1
console.log(b1)

let b2
b2 = 'const,let'
// let b2: Uncaught
// const b2: Uncaught
console.log(b2)


// Assignment:
var c1 = 1
c1 = 100
console.log(c1)

let c2 = 1
c2 = 100
console.log(c2)

// const c3 = 1: Uncaught
c3 = 100
console.log(c3)
