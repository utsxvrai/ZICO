function timeconsumingbyloop(){
    console.log("Loop started")
    for(let i=0;i<10000000000;i++){}
    console.log("Loop ended")
}

function timeConsumingByRuntime0(){
    console.log("timer started")
    setTimeout(function exec0(){
        console.log("Asynchronous time completed 0")
        for(let i=0;i<10000000000;i++){}
    },5000)
}
function timeConsumingByRuntime1(){
    console.log("timer started")
    setTimeout(function exec1(){
        console.log("Asynchronous time completed 1")
    },0)
}
function timeConsumingByRuntime2(){
    console.log("timer started")
    setTimeout(function exec2(){
        console.log("Asynchronous time completed 2")
    },200)
}


console.log("Hi")

timeconsumingbyloop();
timeConsumingByRuntime0();
timeConsumingByRuntime1();
timeConsumingByRuntime2();
timeconsumingbyloop();


console.log("bye")