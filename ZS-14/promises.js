function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function createpro(){
    return new Promise(function exec(resolve,reject){
        console.log("Entering the executer callback function!!")
        setTimeout(function(){
            let num = getRandomInt(10);
            if(num%2==0){
                resolve(num,10 ,5);
            }
            else{
                reject(num, 10);
            }
        },10000);
        console.log("Exiting the executer function")
    });
} 

console.log("Starting....");
const  p = createpro();
console.log("We are waiting for the promise!!")
console.log("Currently my promise object is like ....",p)
p.then(function fulfillHandler(value) {
    console.log("Inside fulfill handler with value ", value);
    console.log("Promise after fulfillment is ", p);
},
function rejectedHandler(value){
    console.log("Inside rejected handler with value ", value);
    console.log("Promise after rejection is ",p);
}
);