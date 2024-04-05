function fun(fn){
    console.log("Hello");
    fn();
}

fun(function askingName(){
    console.log("Utsav");
}); // Hello Utsav


// for recursive function named function expression is used

function fact(n){
    return n==0?1:n*fact(n-1);
}

// 1 2 6 24 120\\

console.trace(); // to see the stack trace

