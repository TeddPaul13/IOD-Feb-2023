const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  console.log(req);
  res.send({
    status: true,
    data: "Port test successful",
    message: "Getting city data succesfully",
  });
});
app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});
