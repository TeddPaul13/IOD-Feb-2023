const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const routes = require('./routers/router.js');

//Enable all cors for all request
app.use(cors()); 

routes(app); //Register the routes

app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});