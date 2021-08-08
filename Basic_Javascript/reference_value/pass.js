let a = 1;
let b = 10;
let c = a;
c = [1, 2];
let d = c;
d.push(3);

// console.log(`A= ${a}`);
// console.log(`B= ${b}`);
// console.log(`C= ${c}`);
// console.log(`D= ${d}`);

let person1 = {
  name: "Tam",
  age: 22,
};

let person2 = person1;
person2.age = 25;

person2 = {
  name: "Ha",
  age: 25,
};

console.log(person1);
console.log(person2);
