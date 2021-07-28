//Scope
var varVariable = true;

if (true) {
  var varVariable = "This is true";
}
console.log(varVariable);

let letVariable = true;
if (true) {
  let letVariable = "This is let";
}
console.log(letVariable);

//Redeclaration
// var varCheck = true;
// var varCheck = false;

// let letCheck = true; //Let can not be redeclared
// let letCheck = false;

const constVaraiable = "This is const";
// constVaraiable = "This can not be changed";
const person = { name: "Tam" };
person.name = "Nhu"; //If variable is an object, const variable can change the properties of the object
console.log(person);
