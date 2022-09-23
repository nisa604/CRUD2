/**
 * @Author: Your name
 * @Date:   2022-09-23 07:30:40
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-09-23 20:49:33
 */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
//const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb://localhost:27017/server", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err =>{
    console.log(err);
})

app.use(express.json());

let UserRouter = require("./routers/UserRouter");
app.use("/", UserRouter);

app.listen(8000, ()=>{
    console.log("listeniing at port:8000")
});



