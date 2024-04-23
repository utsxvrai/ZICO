function download(url, cb){
    console.log("Download is starting from ", url);
    setTimeout(function f(){
        console.log("Downloading is completed");
        const content = "Sher";
        cb(content);
    },4000)
}

function save(data,cb){
    console.log("Started writing the file with",data);
    setTimeout(function f(){
        console.log("Writing file is completed!!");
        const fileName = "hi.txt";
        cb(fileName);

    },5000)

}


download("www.google.com", function process(content){
    console.log("Downloaded Data is ",content)
    save(content, function process(name){
        console.log("File name is",name);
        upload("www.utsav.in", name, function process(res){
            console.log(res);
        })
        
    })
    
})


