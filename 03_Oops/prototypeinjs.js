function Product (n,p){
    this.name = n;
    this.price = p;
}

const p = new Product("Iphone" , 100000);

Product.prototype.display = function(){
    console.log("the details of the product are : " + this.name + " " + this.price);
}

p.display();
p.toString();

