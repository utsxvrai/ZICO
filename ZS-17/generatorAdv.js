function* fetchNextElement() {
    const x = 10;
    yield 11;
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("y is", y);
    }

const it = fetchNextElement();

console.log("first", it.next());
console.log("second", it.next(8));
console.log("third", it.next(5));