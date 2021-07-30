let name = "Tam"; //This is global scope

function greet() {
  console.log(`Name: ${name}`);
  //Variables in global scope can be access inside the function
}

greet();

//Global Scope
function function1() {
  //Local scope #1
  let name = "Ha";
  name = "Nhu";
  console.log(`Function 1 : ${name}`);
  function function2() {
    //Local scope #2
  }
}

function1();
//Global Scope
function someFuncton() {
  //Local Scope
  const firstName = "Nguyen";
  if (true) {
    console.log(`First Name: ${firstName}`);
  }
}
someFuncton();

//Global SCope
if (true) {
  var lastName = "Reynir"; //Var make this inside global scope
  let hobby = "Playing game";
  const skills = "JavaScript";
}
console.log(lastName);
console.log(hobby); // This is support to be in local scope
