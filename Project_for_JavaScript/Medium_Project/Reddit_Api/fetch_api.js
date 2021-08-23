export default {
  search: function (searchTerm, sortBy, limitArticle) {
    return fetch(
      `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${limitArticle}`
    )
      .then((res) => res.json())
      .then((data) => data.data.children.map((data) => data.data))
      .catch((error) => console.log(error));
  },
};
