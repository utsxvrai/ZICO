// const {linearSearch : ls} = require('./searching.js');
// const sorting = require('./sorting.js');


// in es6, we can use named imports and exports
import {linearSearch, binarySearch} from './searching.js';
import * as searchingFunction from './searching.js';
import * as sorting from './sorting.mjs';
import {quickSort} from './sorting.mjs';

// console.log(searchingFunction);

// console.log(searchingFunction.linearSearch([1,2,3,4,5], 3));

// destructuring the object returned by require function : const {linearSearch, binarySearch} = require('./searching'); it means that we are only interested in linearSearch and binarySearch functions from the object returned by require function

// for alias : const {linearSearch: search} = require('./searching'); 

// console.log(ls([1,2,3,4,5], 3));
let arr = [5, 4, 3, 2, 1];
console.log(sorting.quickSort(arr));

// named exports : module.exports.quickSort = quickSort; in this case, we have to import the function by the same name as the function

// default exports : module.exports = quickSort; in this case, we can import the function by any name we want


// for named export in es6 module we have to destruct the object returned by import function
// for default export in es6 module we can import the function by any name we want


