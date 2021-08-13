const userLeft = true;
const userWatchingTutorial = false;

function watchingCallBackTutorial() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User",
        message: "Left",
      });
    } else if (userWatchingTutorial) {
      resolve({
        name: "User",
        message: "Watching Callback",
      });
    } else {
      reject({
        name: "User",
        message: "Playing games and stop coding",
      });
    }
  });
}

watchingCallBackTutorial()
  .then((message) => {
    console.log(`Promise success: ${message.message}`);
  })
  .catch((error) => {
    console.log(`Promise failed: ${error.message}`);
  });

//Example 2
function greeting() {
  return new Promise((resolve, reject) => {
    resolve(text());
    reject("This is world");
  });
}

function text() {
  console.log("This is text");
}

greeting()
  .then(text)
  .catch((error) => {
    console.log(error);
  });

//Example 3
new Promise((resolve, reject) => {
  console.log("Initial");
  resolve();
})
  .then(() => {
    throw new Error("Something failed");
    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happend before");
  });
