"use strict";
let Models = require("../models"); //matches index.js
const getUsers = (res) => {
//finds all users
// Models.User.find({}, {}, {}, (err, data) => {
// if (err) throw err;
// res.send({result: 200, data: data})
// });

Models.User.find()
.then(function (data){
    res.send({result: 200, data: data})
})
.catch(function (err){
    console.log(err);
});

}
const createUser = (data, res) => {
//creates a new user using JSON data POSTed in request
//body
// console.log(data)
// new Models.User(data).save((err, data) => {
// if (err) throw err
// res.send({ result: 200, data: data})
// });
// Models.User.collection.dropIndex("emailId_1", function(err, result) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("Index dropped successfully");

new Models.User(data).save()
.then(function(data){
    res.send({ result: 200, data: data})
})
.catch(function(err){
    console.log(err)
})
}

module.exports = {
getUsers, createUser
}