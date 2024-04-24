function fetchNextElement(array){
    let ind = 0;
    function next(){
        if(ind >= array.length){
            return null;
        }
        const nextElement = array[ind];
        ind++;
        return nextElement;
    }
    return {next};
}

const autoFetch = fetchNextElement([11,2,3,4,5,6,7,8,9,10]);  //inside autoFetch we have next function
console.log(autoFetch.next());
console.log(autoFetch.next());
console.log(autoFetch.next());  
//this is sudo declarative programming


//iterators in javascript
let arr = [1,2,3];
// symbol iterator is a function that returns an object that has a next function - symbol.iterator

it = arr[Symbol.iterator]();
console.log(it.next().value)
console.log(it.next())
console.log(it.next())

// how can i just take values from an array and print them

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let it1 = arr1[Symbol.iterator]();
// let result = it1.next();
// while(!result.done){
//     console.log(result.value);
//     result = it1.next();
// }


