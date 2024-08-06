const x = setTimeout( function exec(){
    console.log("completed timer")
},10000);

console.log(x);
clearTimeout(x);

// different runtimes have different implementations of timers and event loops 
// diffence between node and browser
// in browser, the timer is a number and in node it is an object
// in node, the timer is an object with a ref to the callback function
// in browser, the timer is a number which is an id for the callback function
// in node, the timer is an object with a ref to the callback function