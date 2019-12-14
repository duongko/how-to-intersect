const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoClient = require('mongodb').MongoClient;
const path= require("path")

let app = express();

// view engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", `handlebars`); // ' " ` 
app.use(bodyParser.urlencoded({ extended: false }));

// public folder
app.use(express.static("public"));

// database


let dbLink = `mongodb://localhost/final-project`; // for future use
mongoose.connect(dbLink, { useNewUrlParser: true }, err => {
  if (err) console.log("err database");
  else {
    console.log("Connected database");
  }
});

let port = 6969; // for future use
app.listen(port, err => {
  if (err) console.log("err app listen: ", err);
  console.log(`App listen at ${port}`);
});

// set routers
//  const mainrouter = require("./routers/mainrouter");
// app.use("/", mainrouter)

const homerouter = require("./routers/homerouter")
const giohang = require("./routers/giohang")
const productrouter = require("./routers/productrouter")
const gioithieu = require("./routers/gioithieu")
const lutru = require("./routers/lutru")

app.use("/", lutru)
app.use("/sanpham", productrouter)
app.use("/", giohang)
app.use("/", homerouter)
app.use("/gioithieu", gioithieu)
