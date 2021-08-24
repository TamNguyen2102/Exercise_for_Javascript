import reddit from "./fetch_api.js";

// UI class
class UI {
  static displayArticle(dataList) {
    // Create a new div

    const div = document.createElement("div");
    // Add a class to new div
    div.className =
      "m-2 row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-5";

    dataList.forEach((data) => {
      let output = "";
      output += `
      <div class = 'col'>
        <div class="card m-1">
          <img src=${data.image}
           class="card-img-top" alt="Reddit User's Logo">
          <div class="card-header">
           <h5 class="card-title">${truncate(data.title, 25)}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
            `;
      // Solve the selftext empty
      if (data.selftext === "" || data.selftext == null) {
        output += `<img src='${data.thumbnail}'>`;
      } else output += truncate(data.selftext, 100);

      output += ` 
            </p>

          </div>
          <div class="card-footer">
            <small class="text-muted">${data.subreddit}</small>
          </div>
        </div>
      </div>
      `;
      div.innerHTML += output;
    });

    // Display new div - method: Add div after the form
    document
      .querySelector("#searchForm")
      .insertAdjacentElement("afterend", div);
  }

  static validation() {
    // Get search
    const search = document.querySelector("#search").value;
    const feedback = document.querySelector(".feedback");

    // Check search input
    debugger;
    if (search === "" || search == null) {
      document.querySelector("#search").classList.add("is-invalid");
      feedback.classList.add("invalid-feedback");
      feedback.textContent = "Search term is required";
      feedback.style.display = "block";

      setTimeout(() => {
        document.querySelector("#search").classList.remove("is-invalid");
        feedback.style.display = "none";
      }, 3000);
    } else {
      document.querySelector("#search").classList.add("is-valid");
      feedback.classList.add("valid-feedback");
      feedback.textContent = "Search is valid";
      feedback.style.display = "block";

      setTimeout(() => {
        document.querySelector("#search").classList.remove("is-valid");
        feedback.style.display = "none";
      }, 3000);
    }
  }
}

// Search Class
class Search {
  // Get Article in search form
  static getArticle() {
    // Get search
    const search = document.querySelector("#search").value;
    // Get sort
    const sort = document.querySelector("input[name='sort']:checked").value;
    // Get limit
    const limit = document.querySelector("#limit").value;

    reddit
      .search(search, sort, limit)
      .then((results) => {
        const dataList = results.map((post) => {
          // Get image from reddit api
          const image = post.preview
            ? post.preview.images[0].source.url
            : "https://www.technobezz.com/files/uploads/2020/06/wsi-imageoptim-reddit-marketing-.jpg";

          const { title, subreddit, score, selftext, thumbnail } = post; // Method: Object Destructuring
          const dataList = {
            title,
            subreddit,
            selftext,
            score,
            thumbnail,
            image,
          };
          return dataList;
        }); // Return a array populated with the results of condition value
        return dataList;
      })
      .then((dataList) => UI.displayArticle(dataList)); // Display all posts
  }
}

document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  UI.validation();
  Search.getArticle();
});

// Truncate the string function
function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
}
