// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const storedBooks = Store.getBooks();
    storedBooks.forEach((book) => {
      UI.addItemToList(book);
    });
  }
  //Add and stored Item to list of output
  static addItemToList(book) {
    const list = document.querySelector(".book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button class='remove-btn btn btn-danger'>Remove</button></td>
    `;
    list.append(row);

    //Add a remove event for a item row
    addRemoveItem();
  }
  // Event for clear value input when click submit
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  // Show Alert
  static showAlert(errorMessage) {
    const errorText = [];
    const error = document.querySelector(".error");
    errorMessage.forEach((message) => {
      // Error for title
      if (Object.keys(message) == "titleError") {
        document.querySelector("#title").style.borderColor = "red";
        errorText.push(Object.values(message));
      }
      // Error for author
      if (Object.keys(message) == "authorError") {
        document.querySelector("#author").style.borderColor = "red";
        errorText.push(Object.values(message));
      }
      // Error for ISBN
      if (Object.keys(message) == "isbnError") {
        document.querySelector("#isbn").style.borderColor = "red";
        errorText.push(Object.values(message));
      }
      error.textContent = errorText.join(", ");
      error.style.display = "block";

      //Vanish in 3 seconds
      setTimeout(() => {
        error.textContent = "";
        error.style.display = "none";
        //Clear invalid Border
        const inputFields = document.querySelectorAll(".form-control");
        inputFields.forEach((field) => {
          field.style.borderColor = "#ced4da";
        });
      }, 3000);
    });
  }
}
// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) books = [];
    else books = JSON.parse(localStorage.getItem("books"));
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// Event: Add a book
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  const book = new Book(title, author, isbn);

  //Form validation
  const errorMessage = [];
  if (title == null || title === "")
    errorMessage.push({
      titleError: "Title is required",
    });
  if (author == null || author === "")
    errorMessage.push({
      authorError: "Author is required",
    });
  if (isbn == null || isbn === "")
    errorMessage.push({
      isbnError: "ISBN is required",
    });

  if (errorMessage.length > 0) {
    UI.showAlert(errorMessage);
  } else {
    // Display a new book
    UI.addItemToList(book);
    // Add book to local Storage
    Store.addBook(book);

    // Clear fields
    UI.clearFields();
  }
});
// Event: Remove a Book
function addRemoveItem() {
  const removeBtn = document.querySelectorAll(".remove-btn");
  removeBtn.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.remove();
      const isbn = button.parentElement.previousElementSibling.textContent;

      Store.removeBook(isbn);
    });
  });
}
