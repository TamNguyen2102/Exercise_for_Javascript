if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
} //Nomatter page is loading or not, always execute ready function

function ready() {
  const addBtn = document.querySelectorAll(".add-button");
  addBtn.forEach((button) => {
    button.addEventListener("click", addItemToCart);
  });

  const removeBtn = document.querySelectorAll(".remove-Btn");
  removeBtn.forEach((button) => {
    button.addEventListener("click", removeItem);
    //button is the argument target of removeItem(target)
  });
  updateTotalCart();
  const quantity = document.querySelectorAll(".quantity-value");
  quantity.forEach((value) =>
    value.addEventListener("change", quantityChanged)
  );
}

//Add a Event for each 'Add to cart' button in item card
function addItemToCart(event) {
  //event parameter is the target of whom call this function
  const button = event.target;
  const itemArea = button.parentElement.parentElement.parentElement;
  const itemImageSrc = itemArea.children[0].src;
  const itemName = itemArea.children[1].querySelector(".item-name").textContent;
  const itemPrice = itemArea.children[1]
    .querySelector(".price-area")
    .querySelector(".item-price").textContent;

  //Check Item is inintial in cart
  const itemsInCart = Array.from(document.querySelectorAll(".name"));
  const isInCart = itemsInCart.some((item) => {
    return item.textContent === itemName;
  });
  if (isInCart == true) {
    alert("This is already in cart");
    return;
  } else {
    //If there is no the same item in cart, begin to updateCart
    const cart = addToCart(itemImageSrc, itemName, itemPrice);
    updateCart(cart);
    updateTotalCart();
  }
}

//Function add Cart info into Page
function updateCart(cart) {
  //Create a new div tag in cart section
  const cartRow = document.querySelector(".cart-section");
  const row = document.createElement("div");
  row.classList.add("cart-row");

  //Putting data from function addToCart into new div
  const rowContent = `
   <div class="item">
      <img src="${cart[0]}" alt="" />
      <p class="name">${cart[1]}</p>
    </div>
    <!-- Price area -->
    <div class="price">${cart[2]}</div>
    <!-- Quantity zone -->
    <div class="quantity">
      <input type="number" class="quantity-value" value ='1' min="1" max="100" />
      <div class="remove-Btn btn btn-danger">Remove</div>
    </div>`;
  row.innerHTML = rowContent;
  cartRow.append(row);

  // //Add a remove event for new item
  const removeBtn = cartRow.querySelectorAll(".remove-Btn");
  removeBtn.forEach((button) => button.addEventListener("click", removeItem));
  const quantityNewRow = cartRow.querySelectorAll(".quantity-value");
  quantityNewRow.forEach((quantity) =>
    quantity.addEventListener("change", quantityChanged)
  );
}

//Create an event for clicking remove button
function removeItem(event) {
  const button = event.target;
  button.parentElement.parentElement.remove();
  updateTotalCart();
}

//Function: Add image source, item name and item price into cart
function addToCart(itemImage, itemName, itemPrice) {
  const cart = [];
  cart.push(itemImage, itemName, itemPrice);
  return cart;
}

//Function whenever a quantity changed, notice it and call changePriceInrow()
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) input.value = 1;
  updateTotalCart();
}

//Function update the total price in cart
function updateTotalCart() {
  const cartSection = document.querySelector(".cart-section");
  const cartRow = document.querySelectorAll(".cart-row");
  const InRow = [];
  cartRow.forEach((row) => {
    const priceInRow = row.querySelector(".price");
    const quantityInRow = row.querySelector(".quantity-value");
    if (priceInRow !== null && quantityInRow !== null) {
      InRow.push({
        price: priceInRow.textContent,
        quantity: quantityInRow.value,
      });
    }
  });

  const total = InRow.reduce((currentTotal, row) => {
    return parseFloat(row.price) * parseInt(row.quantity) + currentTotal;
  }, 0);

  cartSection.querySelector(".total").textContent = total;
}
