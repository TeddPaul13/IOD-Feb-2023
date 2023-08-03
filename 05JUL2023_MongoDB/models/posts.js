const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let post = new Schema({
    userId:{ type: String, required: true},
postTitle: { type: String, required: true},
description: { type: String, required: true},
image: { type: String, required: true},
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("post", post);