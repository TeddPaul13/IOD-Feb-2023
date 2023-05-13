const express = require("express");
const app = express();
const port = 3000;

const testRoute = require('./routes/testRoute.js');
const calculatorRoute = require('./routes/calculatorRoute.js');
app.use('/', testRoute)
app.use('/calculator', calculatorRoute)

app.use('/',express.static('public'));

app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});