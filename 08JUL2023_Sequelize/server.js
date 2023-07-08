const cors = require('cors')

let express = require("express");

let app = express();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql();

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors())

//Set Router
const userRouters = require("./routes/userRoutes");
app.use("/api/users", userRouters);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
