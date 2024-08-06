const linearSearch = function search(arr, x){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === x){
            return i;
        }
        
    }
    return undefined;
}

const binarySearch = function search(arr, x){
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end)/2);
    while(start <= end){
        if(arr[mid] === x){
            return mid;
        }
        if(arr[mid] < x){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end)/2);
    }
    return undefined;
}

module.exports = {
    linearSearch,
    binarySearch
}