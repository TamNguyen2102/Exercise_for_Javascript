import User, { getAge } from "./modules.js";

const user1 = new User("Tam", "13/11/1999");
console.log(user1);
console.log(getAge(user1));
