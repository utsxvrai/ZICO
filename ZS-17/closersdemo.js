function process(){
    let i =0 ;
    function innerProcess(){
        i+=1;
        return i;
    }
    return innerProcess;
}

let res = process();
console.log(res());
console.log(res());
console.log(res());

// closure is a function that has access to the outer function scope even after the outer function has finished executing.