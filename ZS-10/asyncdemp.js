console.log("Hello World!!")
for(let i= 0 ; i < 3 ; i++){
    setTimeout(function (){
        console.log("Timer Done!!")
    },0)
}
console.log("Bye")
// no matter what the value of i is, the output will be same as the setTimeout function is asynchronous and will be executed after the loop is completed.