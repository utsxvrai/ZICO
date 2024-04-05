function f(s, fn){ //f is a higher order function
    for(let i = 0 ; i < s ; i++){
        console.log(i);

    }
    
    fn(); // this is a callback function
}

f(5, function fn(){
    console.log("exextued after the loop is done");
}) 