function cbBased(a,b,cb){
    setTimeout(function(){
        if(a+b >10){
            cb("1","Sum is greater than 10");
        }
        else{
            cb(null,"Sum is less than 10");
        }
    },2000);
}

function proBased(a,b){
    return new Promise(function exec(res,rej){
        cbBased(a,b,function(err,info){
            if(err){   //how to 
                res(info);
            }
            else{
                rej(info);
            }
        })
    })
}

proBased(5,6).then(function(info){
    console.log(info);
}).catch(function(err){
    console.log(err);
});

proBased(4,5).then(function(info){
    console.log(info);
}).catch(function(err){
    console.log(err);
})