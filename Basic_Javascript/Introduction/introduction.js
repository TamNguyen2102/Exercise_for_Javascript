// Variables
let firtName = "Tam",
  lastName = "Nguyen";

// Constant
const number1 = 3;

// Primative Type
let name = "Tam";
let age = 22;
let isDeveloper = true;
let hobby = undefined;
let favoriteColor = null;

// Object
let person = {
  name: "Tam",
  age: 22,
};

const student = {
  name: null,
  age: null,
};
student.age = age;

person["age"] = 25;

//Array
let color = ["blue", "red"];
color[2] = 2;

//Function
function greet(name) {
  console.log("Hello " + name);
}

//Loop:-----------
const todoList = [
  {
    id: 1,
    activity: "Learn Javascript basic",
    isCompleted: true,
  },
  {
    id: 2,
    activity: "Brush teeth",
    isCompleted: true,
  },
  {
    id: 3,
    activity: "Do the exercises",
    isCompleted: false,
  },
];

// //For
// for (let index = 0; index < todoList.length; index++) {
//   console.log(todoList[index]);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(`Loop:  ${i}`);
// }

// //While
// let i = 0;
// while (i < 5) {
//   console.log(`While in loop number: ${i}`);
//   i++;
// }

// //forEach
// todoList.forEach(function (todo) {
//   console.log(todo.activity);
// });

//map
const todoActivity = todoList.map(function (todo) {
  return todo.activity;
});

//filter

const todoText = todoList
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map((todo) => {
    return todo.id;
  });

//Switch case
todoText.forEach((stage) => {
  switch (stage) {
    case stage === 1:
      console.log("This is one");
      break;
    case stage === 2:
      console.log("This is two");
      break;
    default:
      console.log("Number one is number two");
      break;
  }
});

for (i = 0; i < todoText.length; i++) {
  if (todoText[i] === 1) console.log("This is one");
  else console.log("This is two");
}
