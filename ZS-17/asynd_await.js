function download(url){
    console.log("Downloading Started from ", url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("Completed Downloading!!!");
            let content = "Hi this is me!";
            res(content);
        },5000);
    });
}

function writeFile(content){
    console.log("Writing the content in a file with data",content);
    return new Promise(function exec(res,rej){
        setTimeout(function f(){
            const fileName = "loli.txt";
            res(fileName);
        },4000)
    })
}

function upload(url,file){
    console.log("File",file,"is uploading to",url);
    return new Promise(function exec(res,rej){
        setTimeout(function up(){
        console.log("File is uploaded");
        const re = "Success!!!";
        res(re)
    },6000);
    })
}
function doAfterReceiving(value){
    let future = it.next(value);
    if(future.done) return;
    future.value.then(doAfterReceiving);
}

async function steps(){
    const downloadedData = await download("www.xyz.com");
    const fileWritten = await writeFile(downloadedData);
    const uploadResponse = await upload("www.utsav.com",fileWritten);

    return uploadResponse;
}

steps().then((value) => console.log("we have completed with ", value));
console.log("Outside");
for(let i = 0 ; i < 100000000 ; i++ ){

}

setTimeout(function f(){},4000);
console.log("For loop done!");


// promise.all - for parallel execution