class Item {
  constructor(name, price, logo, address) {
    this.name = name;
    this.price = price;
    this.logo = logo;
    this.address = address;
  }
  static getPrice() {
    return this.price;
  }
}
const itemList = [];
for (let i = 0; i <= 5; i++) {
  itemList[i] = new Item("name", "price", "logo");
}

function printItem({ name, price, address = "VietNam" }) {
  console.log(`Item:${name} has ${price}. Origin: ${address}`);
}

itemList.forEach((item) => {
  const { name, ...rest } = item;
  console.log(rest);
});

const item1 = new Item("name", "price", "logo", "HaNoi");
printItem(item1);
