const express = require("express");
const path = require("path");

const app = express();

// Whenever a path foward to static, it foward directly to frontend/static
app.use(
  "/static",
  express.static(path.resolve(__dirname, "front_end", "static"))
);

// Any path going back to the root
app.get("/*", (req, res) => {
  // Handler: Wherever the paths sending, they're all going back to index.html
  res.sendFile(path.resolve("front_end", "index.html"));
});

app.listen(process.env.PORT || 2102, () => console.log("Server running..."));
