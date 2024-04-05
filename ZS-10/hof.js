// higher order funciton (hof) is a function that takes a function as an argument or returns a function as a result

function f(x, fn){
    console.log(x);
    fn(); // this is a higher order function
}
f(5, function fn(){
    console.log("Inside funtion fn");
})

let arr = [1, 2, 3, 7, 5,55];                                       

arr.sort(); // it will sort in lexicographical order not in numerical order when we use sort() method

console.log(arr);


let arr2 = [1, 2, 3, 7, 5,55];

arr2.sort(function(a,b){
    return a - b;
})