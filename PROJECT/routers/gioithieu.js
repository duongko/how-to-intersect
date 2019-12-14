const Router = require("express").Router()


Router.get("/", (req, res) => {
    res.render("giothieu")
})
module.exports = Router