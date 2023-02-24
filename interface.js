//interFace is used to validate the specific structure of properties
//interFace for object
var credentials = {
    user: "venkat",
    password: "abc@123"
};
var submit = function (args) {
    console.log(args.user);
    console.log(args.password);
};
submit(credentials);
var employee = {
    name: "sai",
    role: "Ass software"
};
var click = function (type) {
    console.log(type.name);
    //here it will not show any error eventhough it is incorrect so that is the reason interface came into view
    console.log(type.rol);
};
//output =>name:sai , rol:underfined
click(employee);
//same example with interface
var employee1 = {
    name: "sai",
    role: "Ass software"
};
var clickEvent = function (type) {
    console.log(type.name);
    // rol it will throw error because not interface is included
    //console.log(type.rol);
    console.log(type.role);
};
clickEvent(employee1);
//interface with array example
var arrayEmployee;
arrayEmployee = [1, 2];
console.log("arraynumber is:", arrayEmployee[0]);
var detailList = {};
detailList.name = "sai",
    detailList.age = 3,
    detailList.address = "hyd",
    detailList.gender = "male";
console.log(detailList.address, detailList.age);
