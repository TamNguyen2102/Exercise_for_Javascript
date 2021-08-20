class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static showItem() {
    console.log(`Item name: ${this.name} has ${this.price}`);
  }
}

class Storage {
  static getLocalItem() {
    let storedItem = [];
    if (storedItem === null) storedItem = [];
    else {
      let keys = Object.keys(localStorage);
      keys.forEach((key) => {
        storedItem.push(JSON.parse(localStorage.getItem(key)));
      });
    }
    return storedItem;
  }

  static addLocalItem(item) {
    localStorage.setItem(item.name, JSON.stringify(item));
  }

  static removeLocalItem(item) {
    localStorage.removeItem(item.name);
    // localStorage.removeItem("car");
  }

  static localClear() {
    localStorage.clear();
  }

  static getSessionItem() {
    let storedItem = [];
    if (storedItem === null) storedItem = [];
    else storedItem.push(JSON.parse(sessionStorage.getItem("item")));
    return storedItem;
  }

  static addSessionItem(item) {
    sessionStorage.setItem("item", JSON.stringify(item));
  }
}

const item1 = new Item("book", "100$");
const item2 = new Item("car", "1000$");
// Event: Add item to Local
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  Storage.addLocalItem(item1);
  Storage.addLocalItem(item2);
});

// Event: Delete item from local storage
const removeBtn = document.querySelector("#removeBtn");
removeBtn.addEventListener("click", (e) => {
  const item = Storage.getLocalItem();
  // debugger;
  Storage.removeLocalItem(item[0]);
  // Storage.localClear();
});
