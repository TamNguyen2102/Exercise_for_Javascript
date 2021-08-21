// Class UI
class UI {
  static changeRange(event) {
    let value = event.target.value;
    const amount = event.target.previousElementSibling.querySelector(".amount");
    amount.childNodes[0].nodeValue = value; //Change the value without change the inner tags
    UI.calculateTheTip();
  }

  static calculateTheTip() {
    // Get data
    const bill = parseFloat(document.querySelector("#bill").value);

    const tipPercent = document.querySelector("#tipPercent").value;
    const numberOfPeople = document.querySelector("#numberPeople").value;

    // Calculate data
    const tip = parseFloat(bill * (tipPercent / 100));
    const total = parseFloat(bill + tip);

    // Display output
    document.querySelector("#bill").value = bill.toFixed(2);
    document.querySelector("#tip").textContent = tip.toFixed(2);
    document.querySelector("#total").childNodes[1].nodeValue = total.toFixed(2);

    document.querySelector("#tipPerPerson").childNodes[1].nodeValue = (
      tip / numberOfPeople
    ).toFixed(2);
    document.querySelector("#totalPerPerson").childNodes[1].nodeValue = (
      total / numberOfPeople
    ).toFixed(2);
  }
}

// Event: Slide the range of amount
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach((slider) => {
  slider.addEventListener("input", UI.changeRange);
});

// Event: Change the bill number
document.querySelector("#bill").addEventListener("change", UI.calculateTheTip);
