let products = {
    arr :[
        {
            name : "iphone",
            price : 100000,
            desc :"the new apple iphone 13 pro",
            rating: 4.8,
            getCategory : () =>{
                console.log(this.category);
            }
        },
        {
            name : "MacBook M2",
            price : 1250000,
            desc : "Thisnew apple macbook m2.",
            rating : 4.9,
            getCategory : () => {
                console.log(this.category);
            }
        }
    ],
    category : "Electronics",
    getProduct : function(){
        
    }
}