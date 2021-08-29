import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: Dashboard,
    },
    {
      path: "/posts",
      view: Posts,
    },
    {
      path: "/settings",
      view: Settings,
    },
  ];

  // Get array contains the route and set the match for each route
  const potentialMatches = routes.map((matches) => {
    return {
      route: matches,
      isMatch: location.pathname === matches.path,
    };
  });

  // Get the route being fowarded
  let match = potentialMatches.find((matches) => matches.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#content").innerHTML = await view.getHtml();
};

// Set previous routing
window.addEventListener("popstate", router);

// Event when refresh page
document.addEventListener("DOMContentLoaded", (e) => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
