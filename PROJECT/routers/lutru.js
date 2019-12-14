const express = require("express");
const Router = express.Router();
const fs = require("fs");

Router.get("/", (req, res) => {
  res.render("mainproduct");
});

Router.post("/", (req, res) => {
  console.log(req.body);
//   //   sampleC(question);
//     res.render("mainPage", {
//     questionContent: "create cau hoi thanh cong "
//   });
   console.log(req.body)
   let question = req.body.question
   let data
   try {
       let rawData = fs.readFileSync("data.json", "utf8")
       data = JSON.parse(rawData)
   } catch (error) {
       data = []
   } finally {
       let newQuestion = {
           id: data.length,
           questionContent: question,
           questionAnswer: []
       }
       data.push(newQuestion)
       savedData = JSON.stringify(data)
       fs.writeFile("data.json",savedData,(err) => {
           if (err) {console.log(err)} else {
               console.log("Saved")
               res.render("mainproduct")
           }
       })
   }
});

module.exports = Router;