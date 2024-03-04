function isEven(n){
    return n % 2 === 0;
}


var x = 10;
console.log(isEven(x)); // true

var a = console.log("San");
console.log(a);


// parameters and arguments

function add(x=0, y=0){
    return x + y;
}

console.log(add(0,67)); // 30  
console.log(add(100, 200)); // 300


// write a program to find whether a number is prime or not 

function isPrime(n){

    if(n<=1) return false;

    for(let i = 2 ; i <= n/2 ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

console.log("7 is prime : ", isPrime(7));
console.log("10 is prime : ", isPrime(10));
console.log("11 is prime : ", isPrime(11));

// * * * *
// * * * *
// * * * *
// * * * *


for(var i = 0 ; i  < 4 ; i++){
    var str="";
    for(var j = 0 ; j < 4 ; j++){
        str+="* ";
    }
    console.log(str);
}


console.log("string"+1+2); // string12
console.log(1+2+"string"); // 3string
console.log("11"+2);



// *
// * *
// * * *
// * * * *

function pattern2(n){
    for(var i= 0 ; i < n ; i++){
        var s="";
        for(var j=0 ; j<=i ; j++){
            s+="* ";
        }
        console.log(s);
    }
}

pattern2(4);
pattern2(5);
pattern2(6);


//     *
//   * *
// * * *

function pattern3(n){
    for(let i = 0 ; i < n ; i++){
        var s="";
        for(let j = 0; j < n-i-1 ; j++){
            s+=" ";
        }
        for(let k = 0 ; k <=i ; k++){
            s+="* ";
        }
        console.log(s);
    }
    

}
pattern3(8);

