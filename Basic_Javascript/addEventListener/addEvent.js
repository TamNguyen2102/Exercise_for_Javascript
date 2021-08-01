const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
let parentStyle = getComputedStyle(parent).backgroundColor;

//Grand Parent class - Event
grandParent.addEventListener(
  "click",
  (e) => {
    console.log(e.target);
  },
  { capture: true }
);

//Parent class - Event
parent.addEventListener("click", (e) => {
  console.log("Parent");
});

parent.addEventListener("click", () => {
  parent.style.backgroundColor = "black";
});

child.addEventListener("click", greet);
//Child class - Event
function greet() {
  console.log("Hello world");
}
setTimeout(() => {
  child.removeEventListener("click", greet);
}, 2000);
