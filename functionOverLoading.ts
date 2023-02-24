//functional overloading in javascript we are not able to do it , but in typescript we use this functionOverloading
export{}
function addnum(n1:number,n2:number);
function addnum(a:string,b:string);
function addnum(a,b){
    return a+b
}
console.log(addnum(1,2))//here only we can give numbers because we declare dataType as number
console.log(addnum("a","b"))// sam here but in string