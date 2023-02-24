export{}
//Data Types Practice
// it will take only the specific data type which we declared
//(1) numbers
// here in phone only numbers are allowed not any other values(string,array etc..)
let phone:number;
phone=1234456789
console.log(phone);

// here in name only string are allowed not any other values(number,array etc..)
// (2) string
let names:string;
names="sai";
console.log(names);

// here in boolean only  allowed not any other values(string,array etc..)
// (3) Boolean
let isBoolean:boolean;
isBoolean=true;
isBoolean=false;
console.log(isBoolean);

//any it means any dataType is allowed
//  (4) any
let fname:any;
fname="venkat",
fname=123,
fname=true
fname=[1,3],
fname={fname:"venkat",age:23}
console.log(fname);

// here only Arrays  are allowed not any other values(string,array etc..)
//(5) Array
let Arrayvalues:string[];
Arrayvalues=["a","b","c"]
console.log(Arrayvalues)
let ArrayNumvalues:Number[];
ArrayNumvalues=[1,2,3]
console.log(ArrayNumvalues)


//(6) union
// combination of any data types
let unionValues:string |  number;
unionValues="abc",
unionValues=123;
console.log(unionValues);

//(7) Tuple
 let user:[string,number,boolean]
 user=["abc",3,true]
 user.push('false')
 console.log(user)

 //objects 
 let car:{name:string,price:number}={
    name:"swift",
    price:100
 }
 console.log(car)
 //2 method
 type Bike={
    name:string,
    price:number
 }
 let bike :Bike={
    name:'shine',
    price:100,
 }
 console.log(bike.name)

//inference 

//here we declare lastname as a string so for this we cannot assign other data types 
let lastname="sai "
// lastname=10:// it is error 
console.log(lastname);

//type of Annotations

// here we declare lname as string by giving :string ,in inference it will directly assign
let lname:string;
lname="sai",
console.log(lname)

 //unknown 
 // we can convert in-to desired format

 let usernum:unknown=10;
 let userage:number =<number>usernum
 console.log(userage)
 
 //Any
//here it will convert any type of data type ,
 let usernum1:any=10;
 let userage1:number=usernum1
 console.log(userage1)






