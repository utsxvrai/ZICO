/*
1. inversion of control 
2. callback hell -> readablity of the code is reduced
*/

function f(s, fn){ //f is a higher order function
    
    
    fn(s*s); // this is a callback function
    fn(s*s*s); // this is a callback function
}

f(5, function fn(s){  // inversion of control is there because we are passing the control to the function fn from the function f 
    console.log("wow number is square of 5 : ", s);
}) 