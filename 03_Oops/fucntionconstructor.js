function Product(n,p,d) {
    this.name = n;
    this.price = p ;
    this.description = d;



}
const p = new Product("Bag" , 100 , "a cool bag");
console.log(p); // Product { name: 'Bag', price: 100, description: 'a cool bag' }

