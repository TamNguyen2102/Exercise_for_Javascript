export default class User {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  static getSummary() {
    console.log(`Name:${this.name}, birthday:${this.birthday}`);
  }
}

export function getAge(user) {
  return user.birthday;
}
