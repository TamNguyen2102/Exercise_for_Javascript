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

//Progress Bar
const progressBar = document.querySelector(".progress-bar");

child.addEventListener("click", () => {
  let setIntervalID = setInterval(() => {
    const progressBarStyle = getComputedStyle(progressBar);
    const width = parseFloat(progressBarStyle.getPropertyValue("--width")) || 0;
    progressBar.style.setProperty("--width", width + 0.2);
    console.log(width);

    if (width > 100) clearInterval(setIntervalID);
  }, 5);
});
