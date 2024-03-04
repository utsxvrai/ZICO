function fibb(n){
    var a= 0 ,b =1;
    console.log(a);
    for(var i = 0 ; i < n ; i++){
        console.log(b);
        var temp  = a+b;
        a= b;
        b = temp;

    }
}

fibb(1);