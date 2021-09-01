// Hover navbar
export default class UI {
  focusNavItem(path) {
    navItems.forEach((item) => {
      debugger;
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
