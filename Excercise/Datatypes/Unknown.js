var firstName = "Sachin";
var anotherName = "Patel";
//Will not give error
//firstName = anotherName;
//Unknown Can not be assigned to String
//anotherName = firstName;
console.log(firstName);
console.log("==============");
var middleName = 100;
var lastName = "Patel";
//Any can be assigned to String
lastName = middleName;
console.log(lastName);
console.log("==================");
function f1(func) {
    func();
}
f1(function () {
    console.log("assignable function");
});
function f2(func) {
    //Unknown can  not hold function    
    //func();
}
//Con not assign
// let sum : unknown = ()=>{
//    console.log("hey i am unkonwn");
// };
// sum();
