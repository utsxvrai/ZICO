class Product {
    name;
    price;
    description;
                        // even after commenting the properties, the properties can be accessed using constructor
    constructor(n,p,d){ // in js constructor is a special method that is called when an object is created
        this.name = n;  // this keyword refers to the current object
        this.price = p;
        this.description = d;

        // return "10" // primitive -> no effect
        // return {};
        // return this; // it is equivalent to return this in js
    }

    set setName(n){
        if(typeof n === "string"){
            this.name = n;
        }
        else{
            console.log("Invalid name");
        }
    }

    get getName(){
        return this.name;
    }

    display(){

    }
}

// const p = new Product("Bag" , 100 , "a cool bag");  // creating an object of the class Product and calling the constructor

// if you dont write a constructor in the class, then the class will have a default constructor

// console.log(p); // Product { name: 'Bag', price: 100, description: 'a cool bag' }
console.log(Object);

// we can use setter and getter methods to access the properties of the class   