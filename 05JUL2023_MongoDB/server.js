const express = require("express");
const dbConnect = require("./dbConnect");

const app = express();
require("dotenv").config();

app.use(express.json());

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)
// parse requests of content-type -application/json


app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on
port ${PORT}.`);
});