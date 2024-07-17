
let firstName: unknown = "Sachin";

let anotherName : String = "Patel";

//Will not give error
//firstName = anotherName;

//Unknown Can not be assigned to String
//anotherName = firstName;

console.log(firstName);

console.log("==============");


let middleName: any = 100;

let lastName: String = "Patel";

//Any can be assigned to String
lastName = middleName;

console.log(lastName);

console.log("==================");

function f1(func:any){
     func();
} 

f1(()=>{
    console.log("assignable function");
});

function f2(func : unknown){
    //Unknown can  not hold function    
    //func();
}

//Con not assign
// let sum : unknown = ()=>{
//    console.log("hey i am unkonwn");
// };
// sum();