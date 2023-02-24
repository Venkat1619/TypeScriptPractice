"use strict";
exports.__esModule = true;
//Data Types Practice
// it will take only the specific data type which we declared
//(1) numbers
// here in phone only numbers are allowed not any other values(string,array etc..)
var phone;
phone = 1234456789;
console.log(phone);
// here in name only string are allowed not any other values(number,array etc..)
// (2) string
var names;
names = "sai";
console.log(names);
// here in boolean only  allowed not any other values(string,array etc..)
// (3) Boolean
var isBoolean;
isBoolean = true;
isBoolean = false;
console.log(isBoolean);
//any it means any dataType is allowed
//  (4) any
var fname;
fname = "venkat",
    fname = 123,
    fname = true;
fname = [1, 3],
    fname = { fname: "venkat", age: 23 };
console.log(fname);
// here only Arrays  are allowed not any other values(string,array etc..)
//(5) Array
var Arrayvalues;
Arrayvalues = ["a", "b", "c"];
console.log(Arrayvalues);
var ArrayNumvalues;
ArrayNumvalues = [1, 2, 3];
console.log(ArrayNumvalues);
//(6) union
// combination of any data types
var unionValues;
unionValues = "abc",
    unionValues = 123;
console.log(unionValues);
//(7) Tuple
var user;
user = ["abc", 3, true];
user.push('false');
console.log(user);
//objects 
var car = {
    name: "swift",
    price: 100
};
console.log(car);
var bike = {
    name: 'shine',
    price: 100
};
console.log(bike.name);
//inference 
//here we declare lastname as a string so for this we cannot assign other data types 
var lastname = "sai ";
// lastname=10:// it is error 
console.log(lastname);
//type of Annotations
// here we declare lname as string by giving :string ,in inference it will directly assign
var lname;
lname = "sai",
    console.log(lname);
//unknown
var usernum = 10;
var userage = usernum;
console.log(userage);
