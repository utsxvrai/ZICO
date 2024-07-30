function download(url, time){
    console.log("Downloading Started from ", url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            if(time < 3000){
                console.log("Error Downloading!!!",time);
                rej("Error in downloading!!!");
            } 
            else {
                console.log("Completed Downloading!!!",time);
            let content = "Utsav is here!";
            res(content);
            }
        },7000);
    });
}

const p1 = download("www.google.com",1000);
const p2 = download("www.meta.com",2000);
const p3 = download("www.xyz.com",5000);
Promise.all([p1,p2,p3]).then(function processHandler(value){
    console.log("All the downloads are completed with data",value);
}).catch(function f(err){
    console.log("Error in downloading");
});