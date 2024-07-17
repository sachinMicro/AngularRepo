
let num;

let user: String = "Sachin";

let numbers: Object = [10,20,20];
//Array is also a Object Type
let marks:Array<number> = [10,20,30];

let randomStrings: any[]= [10,"sachin",false];

//Touple Example : Order of Data type must be preserved
let tupleExample : [String,number]= ["Sachin",20];
//Compilation Error
//let tupleExample : [String,number,String]= ["Sachin",20,false];

console.log(num);

console.log(user);

console.log(numbers);

console.log(marks);

console.log(randomStrings);

console.log(tupleExample);


