function getRequest(url){
    return new Promise(function exec(res,rej){
        fetch(url).then(function(response){
            if(response.status === 200){
                res(response.json());
            }
            else{
                rej("Error in fetching data");
            }
        })
    })
}


getRequest("https://jsonplaceholder.typicode.com/posts").then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})