let x =-0;
console.log(x=== 0) // true

// how can we check whether it is negative zero or positive zero

console.log(Object.is(x, -0)) // true
console.log(Object.is(x, 0)) // false

console.log(Math.sign(x)) // -0
console.log(Math.sign(0)) // 0

// write a function that takes a number and can give us sign of a number properly

function sign(x){
    return x !== 0 ? Math.sign(x) : Object.is(x, -0) ? -1 : 1;
}

console.log(sign(-0)) // -1
// but this is not the proper way to check the sign of a number
// we can use the below function to check the sign of a number

