const name = document.querySelector("#name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = [];
  if (name.value === "" || name.value == null) {
    message.push("Name is required");
  }

  if (password.value === "" || password.value == null) {
    message.push("Password is required");
  }

  if (password.value.length < 6 && password.value.length > 0) {
    message.push("Password must be more length than 6");
  }

  if (password.value.length > 20) {
    message.push("Message must be < 20");
  }

  if (message.length > 0) {
    e.preventDefault(); //This prevent page restart when clicking submit
    error.innerText = message.join(", ");
    error.style.display = "block";
  }
});
