"use strict";
let Models = require("../models"); //matches index.js
const getPosts = (res) => {
  //finds all users

  Models.Post.find()
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch(function (err) {
      console.log(err);
    });
};
const createPost = (data, res) => {
  //creates a new user using JSON data POSTed in request body

  //validation code for the user ID HERE

  new Models.Post(data)
    .save()
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = {
  getPosts,
  createPost,
};
