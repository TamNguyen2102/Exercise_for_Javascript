const express = require("express");
const path = require("path");

const app = express();

// Whenever the path foward to static, foward it to static folder
app.use(
  "/static",
  express.static(path.resolve(__dirname, "front_end", "static"))
);

// Wherever the path foward to, it always foward to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front_end", "index.html"));
});

app.listen(process.env.PORT || 2102, () => console.log("Server is running..."));
