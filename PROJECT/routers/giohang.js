const Router = require("express").Router()


Router.get("/giohang", (req, res) => {
    res.render("giohang")
})
module.exports = Router