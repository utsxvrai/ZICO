// array of urls


function download(urls){
    const promises = map.urls(function(url){
        return new Promise(function exec(res,rej){
            fetch(url).then(function(response){
                if(response.status === 200){
                    res(response.json());
                }
                else{
                    rej("Error in fetching data");
                }
            })
        }).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
    })
    return Promise.all(promises);
}    














const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums'
];