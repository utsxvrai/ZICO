// scopes means visibility of variables and functions

    // console.log("hi");
    // console.lo("hi"); // error
// console.log(name);
// // let name = "Utsav";
// var name = "Utsav";
// function fun(){
//     console.log(name);
// }
// fun();
// console.log(name);


var x =1;
if(x===1){
    var x=2; // x is redeclared
    console.log(x);
}
console.log(x); 

let y=1;
if(y===1){
    let y=2;
    console.log(y);
}
console.log(y);
