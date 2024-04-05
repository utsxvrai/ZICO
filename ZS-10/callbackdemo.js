setTimeout(function exec(){
    console.log("Running after some time");
},4000)

// callback function is a function that is passed as an argument to another function
// callback function is executed after the parent function is executed
// callback problem is a problem where we have to wait for some time to get the result of the function that we have called callback hell