const newItem = document.querySelector("#newItem");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("input");

addBtn.addEventListener("click", addNewItem);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.key === 13) {
    addNewItem();
  }
});

function addNewItem() {
  const listItem = document.createElement("li");
  const ul = document.querySelector("ul");
  const deleteBtn = document.createElement("button");

  listItem.append(newItem.value); //Add a text from input to <li></li>
  //Delete Button
  listItem.append(deleteBtn);
  deleteBtn.textContent = "Delete";
  //Add new item to ul
  ul.append(listItem);
  listItem.style.margin = "1rem";
  listItem.style.color = "red";
  listItem.style.listStyle = "none";

  console.log(listItem.textContent);

  //Add a click event to delete button
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
  input.value = "";
  input.focus();
}
