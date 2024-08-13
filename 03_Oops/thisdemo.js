let iphone = {
    name : "iPhone 12",
    price : 79999,
    discount : 5000,
    desc : "6.1-inch Super Retina XDR display",

    display : function(){
        console.log("Displaying the product details", this);
    },
}




let macbook = {
    name : "MacBook Pro",
    price : 122900,
    discount : 10000,
    desc : "13-inch Retina display",

    display : function(){
        console.log("Displaying the product details", this);
    },
}

iphone.display(); // here the this keyword will refer to the iphone object
macbook.display(); // here the this keyword will refer to the macbook object

