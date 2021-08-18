//Object Literal
const book1 = {
  title: "The Lord of the Rings",
  author: "J. R. R. Tolkien",
  year: "1954",
  getSummary() {
    return `Book: ${this.title} created by ${this.author} in ${this.year}`;
  },
};
const book2 = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: "1997",
  getSummary() {
    return `Book: ${this.title} created by ${this.author} in ${this.year}`;
  },
};

//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  //   this.getSummary = function () {
  //     return `Book: ${this.title} created by ${this.author} in ${this.year}`;
  //   };
}

//Object of Protos
const bookProtos = {
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

Book.prototype.getSummary = function () {
  return `Book: ${this.title} created by ${this.author} in ${this.year}`;
};

Book.prototype.getAuthor = function () {
  return console.log(this.author);
};

const book3 = new Book("The Old Man and the Sea", "Ernest Hemingway", "1951");
book3.getAuthor();

const book4 = Object.create(bookProtos, {
  title: { value: "Book one" },
  author: { value: "Harvard" },
  year: { value: "1997" },
});
console.log(book4);

//Magazine Constructor, extends from Book
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
Magazine.prototype.getMonth = function () {
  console.log(this.month);
};

const magazine = new Magazine("Times", "David", "2021", "September");
magazine.getMonth();
