function f(cb){
    return new Promise(function exec(res,rej){
        console.log("ji");
        setTimeout(function (){
                if(cb){
                    res(cb);
                }
                else{
                    rej("Error");
                }
        },2000);
    });
}
function g(){
    console.log("hi");
}
f(g).then(function(h){
    h();
});
f().then(function(h){
    h();
}).catch(function(err){
    console.log(err);
});