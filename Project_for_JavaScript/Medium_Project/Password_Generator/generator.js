const characterAmountRange = document.querySelector("#passwordAmountRange");
const characterAmountNumber = document.querySelector("#passwordAmountNumber");
const containNumbers = document.querySelector("#containNumbers");
const containUppercase = document.querySelector("#containUppercase");
const containSymbols = document.querySelector("#containSymbols");
const form = document.querySelector("#generatorForm");
const passwordDisplay = document.querySelector(".password-display");

const LOWERCASE_CHAR_CODES = fromTo(97, 122);
const UPPERCASE_CHAR_CODES = fromTo(65, 90);
const NUMBERS_CHAR_CODES = fromTo(48, 57);
const SYMBOLS_CHAR_CODES = fromTo(33, 47)
  .concat(fromTo(58, 64))
  .concat(fromTo(91, 96))
  .concat(fromTo(123, 126));

characterAmountRange.addEventListener("input", synCharacterAmount);
characterAmountNumber.addEventListener("input", synCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = characterAmountNumber.value;
  const uppercase = containUppercase.checked;
  const numbers = containNumbers.checked;
  const symbols = containSymbols.checked;

  const password = generatePassword(amount, numbers, uppercase, symbols);
  passwordDisplay.innerHTML = password;
});

function generatePassword(amount, numbers, uppercase, symbols) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (numbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);
  if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < amount; i++) {
    //Return a random index in charCodes array
    const character = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(character));
  }
  return passwordCharacters.join("");
}

//Function make a list number from A Value to B value
function fromTo(low, high) {
  const array = [];
  for (i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

//Make Range and Number have a same value
function synCharacterAmount(event) {
  const input = event.target.value;
  characterAmountNumber.value = input;
  characterAmountRange.value = input;
}
