//interFace is used to validate the specific structure of properties
//interFace for object
export{}
let credentials={
    user:"venkat",
    password:"abc@123"
}
let submit =(args:validCred)=>{
    console.log(args.user);
    console.log(args.password);

}
submit(credentials);

interface validCred{
    user:string,
    password:string

}


let employee={
    name:"sai",
    role:"Ass software"
}

let click =(type:any)=>{
    console.log(type.name);
    //here it will not show any error eventhough it is incorrect so that is the reason interface came into view
    console.log(type.rol);

}
//output =>name:sai , rol:underfined
click(employee)



//same example with interface

let employee1={
    name:"sai",
    role:"Ass software"
}

let clickEvent=(type:validlist)=>{
    console.log(type.name);
    // rol it will throw error because not interface is included
      //console.log(type.rol);
    console.log(type.role);

}
clickEvent(employee1);

interface validlist{
    name:string,
    role:string
}

//interface with array example

let arrayEmployee:arrayEvent
arrayEmployee=[1,2]
console.log("arraynumber is:",arrayEmployee[0])

// let clickArrayEvent =(type:arrayEvent)=>{
//     console.log(type[0])

// }
// clickArrayEvent(arrayEmployee);

interface arrayEvent{
    [index:number]:number
}

//interFace with inheritance

interface person{
    name:string,
    age:number
}
interface personDetails extends person{
    gender:string,
    address:string
}
let detailList=<personDetails>{}
detailList.name="sai",
detailList.age=3,
detailList.address="hyd",
detailList.gender="male"
console.log(detailList.address,detailList.age);
