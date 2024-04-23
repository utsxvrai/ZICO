function download(url) {
    console.log("started downloading content form ", url);
    return new Promise(function exec(res, rej) { //executer callback
        setTimeout(function p() {
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            // res(content);
            rej(content);
        }, 5000);
    })
}

x = download("www.xyz.com");
console.log("x is", x);
x.then(
    function fulfillHandler1(value) {
        console.log("Content downloaded i 1", value);
        return "New promise string";
    },
    function rejectHandler1(value) {
        console.log("rejected with", value);
        return "not completed!!"
    }
)
.then(
    function newFullFillHandler(value) {
        console.log("value from chained then promsie", value);
    }
)