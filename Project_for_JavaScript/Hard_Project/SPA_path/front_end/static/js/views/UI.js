// Hover navbar
export default class UI {
  focusNavItem(path) {
    const navItems = document.querySelectorAll("[data-tab-content]");
    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      item.style.setProperty("background-color", "black");
      item.style.setProperty("color", "white");

      if (href === path) {
        item.style.setProperty("background-color", "white");
        item.style.setProperty("color", "black");
      }
    });
  }
}
