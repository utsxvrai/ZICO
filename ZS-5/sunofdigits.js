function sumOfDigits(n){
    var sum = 0 ; 
    while(n>0){
        let d = n%10;
        sum+=d;
        n = parseInt(n/10); //parseInt is used to convert float to int also n = Math.floor(n/10); can be used

    }
    return sum;
}

console.log(sumOfDigits(123)); // 6

