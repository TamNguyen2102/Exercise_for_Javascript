const removeBtn = document.querySelectorAll(".remove-Btn");
const addBtn = document.querySelectorAll(".add-button");
//Remove item
removeBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.parentElement.parentElement.remove();
  });
});

//Function: Add image source, item name and item price into cart
function addToCart(itemImage, itemName, itemPrice) {
  const cart = [];
  cart.push(itemImage, itemName, itemPrice);
  return cart;
}

//Add a Event for each 'Add to cart' button in item card
addBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const itemArea = button.parentElement.parentElement.parentElement;

    const itemImageSrc = itemArea.children[0].src;
    const itemName =
      itemArea.children[1].querySelector(".item-name").textContent;
    const itemPrice = itemArea.children[1]
      .querySelector(".price-area")
      .querySelector(".item-price").textContent;

    const cart = addToCart(itemImageSrc, itemName, itemPrice);
    updateCart(cart);
  });
});

//Function add Cart info into Page
function updateCart(cart) {
  const cartRow = document.querySelector(".cart-section");
  const row = document.createElement("div");
  row.classList.add("cart-row");
  const rowContent = `
   <div class="item">
      <img src="${cart[0]}" alt="${cart[1]}" />
      <p>T-shirt</p>
    </div>
    <!-- Price area -->
    <div class="price">${cart[2]}</div>
    <!-- Quantity zone -->
    <div class="quantity">
      <input type="number" id="quantity" min="0" max="100" />
      <div class="remove-Btn btn btn-danger">Remove</div>
    </div>`;
  row.innerHTML = rowContent;
  cartRow.append(row);
}
