//Function with Promise
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    if (location === "SaiGon") {
      resolve("Welcome to SaiGon");
    } else if (location === "HaNoi") resolve("Welcome to HaNoi");
    else {
      reject("You gone too far");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => console.log("Processing responses"), 1000);
    setTimeout(() => resolve(`Extra Information: ${response}`), 3000);
  });
}

// makeRequest("HaNoi")
//   .then((response) => {
//     console.log("Received response");
//     return processRequest(response);
//   })
//   .then((processedResponse) => console.log(processedResponse))
//   .catch((error) => console.log(error));

// //SaiGon
// makeRequest("SaiGon")
//   .then((response) => {
//     console.log(`Repsone is received`);
//     return processRequest(response);
//   })
//   .then((responseSaiGon) => console.log(responseSaiGon))
//   .catch((error) => console.log(error));

//Async Await function
async function travel() {
  try {
    const response = await makeRequest("VungTau");
    console.log("Received Response");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}
travel();

//a function always returns a promise.
// async function f() {
//   return 1;
// }
// f().then(alert);

async function greetingNoob() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello Noob"), 2000);
  });
  let result = await promise;
  console.log(result);
}
greetingNoob();
