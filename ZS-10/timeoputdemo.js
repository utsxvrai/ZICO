let count=0;

y = setInterval(() => {
    count++;
    console.log(count);
    if(count == 7){
        console.log("Ronaldo is the best player in the world, siuuuuu!")
        clearInterval(y);
    }
},200)