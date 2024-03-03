// learning variables
var a = 5;
let b = 10;
const c = 15;

console.log(a);
console.log(a, b, c);   

var marks = 100;
var name = "ZS";
var age;
var company = null;
console.log("Marks: ", marks);
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Company: ", company);

var user = {
    name: "ZS",
    age: 25,
    company: "ZS",
    marks: 100
};
console.log (user);


console.log("this is very annoying \n and i dont know what i am doing \t also i am not sure if i am doing it right \n")


// Arithmetic Operators

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Relational Operators

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
console.log("\n");

// Logical Operators

console.log(a > b && a < c);
console.log(a > b || a < c);
console.log(!(a > b));

console.log(10 && 6);

// special numbers 
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log(0/0);
console.log(Infinity - Infinity);
console.log(Infinity + Infinity);
console.log(Infinity * Infinity);
console.log(Infinity / Infinity);
console.log(Infinity % Infinity);
console.log(Infinity ** Infinity);
console.log(Infinity == Infinity);
console.log(Infinity != Infinity);
console.log(Infinity > Infinity);
console.log(Infinity < Infinity);
console.log(Infinity >= Infinity);
console.log(Infinity <= Infinity);



// Bitwise Operators


console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log("\n");

// Abstract Equality Comparison (==) and Strict Equality Comparison (===)

console.log(5 == "5");
console.log(5 === "5");
console.log(5 === 5);
console.log(5 == 5);
console.log("\n");


// Typeof Operator

console.log(typeof 5);
console.log(typeof "5");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof 0/0);