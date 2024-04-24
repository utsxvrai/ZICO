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


async function steps(){
    try{
        const downloadedData = await download("www.xyz.com");
        console.log("Downloading Done with data",downloadedData);
        return downloadedData;
    }
    catch(error){
        console.log("Error in downloading",error);
        throw error;
    }
}

steps()