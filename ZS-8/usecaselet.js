function fun(){
    for(var i = 0 ; i < 10 ; i++){
        console.log(i);
    }
    console.log(i); // 10
}

// here var is a bad practice as it is not block scoped and it is function scoped so it is available outside the block also so we should use let instead of var