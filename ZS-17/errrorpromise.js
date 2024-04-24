function download(url){
    console.log("Downloading Started from ", url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("Completed Downloading!!!");
            let content = "Hi this is me!";
            rej(content);
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

let x = download("www.google.com")
x.then(function processHandler1(content){
    console.log("Downloading Done with data",content);
    return writeFile(content);
},function writeReject1(content){
    console.log("write reject 1 ",content)
    throw content
}

).then(function processHandler2(value){
    console.log("Data is writing to",value);
    const newUrl = "www.meta.com";
    return upload(newUrl, value);
},function writeReject2(content){
    console.log("write reject 2 ",content)
    throw content
}
).then(function processHandler3(value){
    console.log("Uploading to new URL is",value);
},function writeReject3(content){
    console.log("write reject 3",content)
    throw content
}
)

// it is difficult to handle the error in the promise chain.