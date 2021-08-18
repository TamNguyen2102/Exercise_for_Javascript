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

//Class ES6
class Dog {
  constructor(name, type, birthday) {
    this.name = name;
    this.type = type;
    this.birthday = birthday;
  }

  _attendance = 0;

  getAge() {
    return this.calcAge();
  }
  calcAge() {
    return Date.now() - this.birthday;
  }
  bark() {
    return console.log("Gau gau!");
  }
  #eat() {
    return console.log("Eating");
  }

  updateAttendance() {
    //add a day to the dog's attendance days at the petsitters
    this._attendance++;
  }
}
const pluto = new Dog("Pluto", "Bull", "1/13/2019");
console.log(pluto);
pluto.updateAttendance();
console.log(`${pluto.name} attends ${pluto._attendance} time`);

//Child class HerdingDog, inherits from parent class Dog
class HerdingDog extends Dog {
  constructor(name, type, birthday, color) {
    super(name, type, birthday);
    this.color = color;
  }
  herd() {
    //Additional method for child class
    return console.log("Stay together!");
  }
}
const herding = new HerdingDog("kiki", "Husky", "3/5/2017", "brown");
herding.bark();
console.log(herding);

//New Class Animal
class Animal {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  eat() {
    console.log("Eating food");
  }
}

//Inheritance
class Cat extends Animal {
  constructor(name, birthday, type) {
    super(name, birthday);
    this.type = type;
  }

  bark() {
    console.log("Meow meow!");
  }

  static patrol() {
    console.log("Patroling!");
  }
}
const cat = new Cat("Mun", "2/1/2017", "asd");
cat.bark();
Cat.patrol();
