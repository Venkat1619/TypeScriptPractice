export{}

class bike{
    name:string
    price:number

    constructor(name:string,price:number){
        this.name=name,
        this.price=price
    }
    public func(){
        console.log('hello world!')
    }
}
let myBike= new bike("shine",100)
console.log(myBike.name)
myBike.func()


//class with inheritance 

//private can read only in that class
//protected can read in that class and extended class
//public can read any where 

class car{
    name:string
    protected price:number

    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
}
class newcar extends car{
   constructor(name:string,price:number){
    super(name,price);
        this.name=name
        this.price=price
    
   }
}
let Car = new car("suzuki",100);
// console.log(Car.name)
let car1= new newcar("tata",100);
console.log(car1)