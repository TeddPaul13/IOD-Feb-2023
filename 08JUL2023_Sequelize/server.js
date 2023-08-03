const cors = require('cors')
const bodyParser = require('body-parser'); // added for jwt

let express = require("express");

let app = express();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql();

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(bodyParser.json()); // added for jwt
app.use(bodyParser.urlencoded({   // added for jwt
  extended: true
}));
app.use(cors())

//Set Router
const userRouters = require("./routes/userRoutes");
app.use("/api/users", userRouters);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
