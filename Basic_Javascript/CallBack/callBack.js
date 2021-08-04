//Example 1
function notify() {
  console.log("Callback Tutorial");
}
function taskOne(callback) {
  callback();
}

taskOne(notify);

//Example 2 - Basic callback
function greet(name) {
  console.log(`Hello ${name}`);
}
function processUserInput(callback) {
  let name = "Tam";
  callback(name);
}

processUserInput(greet);

//Example 3:
function greeting1(callback) {
  setTimeout(() => {
    console.log("This is first function");
  }, 2000);
  callback();
}
function greeting2() {
  console.log("This is second function");
}

greeting1(greeting2);

//Example 4:
debugger;
const items = [
  { name: "Item 1", type: "Book" },
  {
    name: "Item 2",
    type: "Handheld",
  },
];

function getItem(callback) {
  setTimeout(() => {
    let output = "";
    items.forEach((item, index) => {
      output += `<li>Item ${index + 1}: ${item.type}</li>`;
    });
    document.body.innerHTML = output;
    callback();
  }, 1000);
} //Show the item in Object

function deleteItem() {
  setTimeout(() => {
    document.body.remove();
  }, 5000);
}

function createItem(item, callback) {
  setTimeout(() => {
    items.push(item);
    callback();
  }, 2000);
}
createItem({ name: "Item 3", type: "Ps4" }, () => {
  getItem(deleteItem);
}); //This is callback problem: Callback in callback - Callback hell
