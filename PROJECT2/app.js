const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path=require("path")


let app = express();
// 'use strict'
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect(
  "mongodb://localhost/questions",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database Connected");
    }
  }
);



app.use(express.static("public"));

//cai dat hien thi
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const ake =require("./routers/ake")
app.use("/",ake)
//khoi tao server
app.listen(7000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("App listen at 5000");
  }
});