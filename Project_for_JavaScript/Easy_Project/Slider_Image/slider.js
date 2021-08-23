let counter = 0;
class UI {
  static slideToLeft() {
    // e.target.blur();
    counter--;
    UI.slide();

    if (counter < 0) UI.slideEdge();
  }

  static slideToRight() {
    // e.target.blur();

    counter++;
    UI.slide();

    const carouselImages = document.querySelector(".slide").children;
    if (counter > carouselImages.length - 1) UI.slideEdge();
  }

  static slideEdge() {
    const carouselImages = Array.from(
      document.querySelector(".slide").children
    );
    if (counter < 0) counter = counter + carouselImages.length;
    if (counter > carouselImages.length - 1) {
      counter = counter - carouselImages.length;
    }

    UI.slide();
    // document.querySelector(".slide").style.transition = "none";
  }

  static slide() {
    const slide = document.querySelector(".slide");
    const size = slide.clientWidth;

    document.querySelector(".slide").style.transition =
      "transform 1000ms ease-in";
    slide.style.transform = "translateX(" + -size * counter + "px)";
    UI.backgroundChange();
  }

  static backgroundChange() {
    const body = document.querySelector("body");

    body.removeAttribute("class");

    if (counter === 0) body.classList.add("one");
    if (counter === 1) body.classList.add("two");
    if (counter === 2) body.classList.add("three");
    if (counter === 3) body.classList.add("four");
  }
}

// Event Click Slider
document.querySelector("#leftBtn").addEventListener("click", UI.slideToLeft);
document.querySelector("#rightBtn").addEventListener("click", UI.slideToRight);

setInterval(UI.slideToRight, 5000);
