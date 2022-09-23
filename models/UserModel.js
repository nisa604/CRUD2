/**
 * @Author: Your name
 * @Date:   2022-09-23 07:38:18
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-09-23 07:53:16
 */
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    age: Number,
    Hobby: String
});

module.exports = mongoose.model("User",UserSchema);