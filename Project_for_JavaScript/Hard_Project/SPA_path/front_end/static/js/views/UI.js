// Hover navbar
export default class UI {
  focusNavItem(path) {
    const navItems = Array.from(document.querySelector(".navbar").children);
    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      item.classList.remove("navbar-item");

      if (href === path) {
        item.style.setProperty("background-color", "white");
        item.style.setProperty("color", "black");
        console.log(item.style);
      }
    });
  }
}
