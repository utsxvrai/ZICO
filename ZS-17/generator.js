function* fetchNextElement(){
    console.log("inside fetchNextElement");
    yield "+";
    yield 2;
    console.log("middle fetchNextElement");
    yield 3;
    return 4; //return will be the final yield value
    yield 4;
}

const it = fetchNextElement();  
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// generator is a function that can pause and resume its execution at any point of time.