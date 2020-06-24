const express = require("express"),
  cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ msg: "Nieves, Agustín; Alegre, Max" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
