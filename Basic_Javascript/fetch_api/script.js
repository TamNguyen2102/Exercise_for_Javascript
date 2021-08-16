document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getUser").addEventListener("click", getUser);

document.querySelector("#addPost").addEventListener("submit", addPost);

function getText() {
  fetch("sample.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.querySelector(".output").innerHTML = data;
    });
}

function getUser() {
  fetch("https://reqres.in/api/users?page=2")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let userArray = [];
      json.data.forEach((user) => {
        userArray += `
       <ul>
        <li class='list-group-item'>Id: ${user.id}</li>
        <li  class='list-group-item'>Email: ${user.email}</li>
        <li  class='list-group-item'>First name: ${user.first_name}</li>
        <li  class='list-group-item'>Last name: ${user.last_name}</li>
        <li  class='list-group-item'><img src='${user.avatar}'></li>
       </ul>
       `;
      });
      document.querySelector(".output").innerHTML = userArray;
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.querySelector("#bookTitle").value;
  let body = document.querySelector("#bookDescription").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
