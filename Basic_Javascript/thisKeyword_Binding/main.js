let sum = (a, b) => {
  return a + b;
};

let add = sum(5, 10);
console.log(add);

let myButton = {
  message: "isClicked",
  click: () => {
    console.log("Button " + this.message);
  },
};

console.log();
