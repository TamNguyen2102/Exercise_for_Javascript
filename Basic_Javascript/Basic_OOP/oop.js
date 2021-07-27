//Constructor function
function Person(firtName, lastName, dob) {
  this.firtName = firtName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firtName}  ${this.lastName}`;
};
// Instaniate object
const person1 = new Person("Tam", "Nguyen", "3-6-1970");
console.log(person1.date);
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
