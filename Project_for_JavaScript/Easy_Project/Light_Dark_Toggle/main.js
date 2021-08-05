const container = document.querySelector(".light-dark-container");
const swapBtn = document.querySelector(".swap-button");

swapBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const rotation = parseInt(
    getComputedStyle(container).getPropertyValue("--rotation")
  );
  container.style.setProperty("--rotation", rotation + 180);
  console.log(getComputedStyle(container).getPropertyValue("--rotation"));
});
