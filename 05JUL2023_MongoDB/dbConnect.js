require('dotenv').config();
const Mongoose = require('mongoose');
const uri = process.env.DB_URI;

const mongooseOptions = {
useNewUrlParser: true,
useUnifiedTopology: true
};
//Connect to MongoDB

// Get the default connection
Mongoose.connect(uri, mongooseOptions).then(
    () => {console.log("Connected")}
);
const db = Mongoose.connection
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
exports.Mongoose = Mongoose;
