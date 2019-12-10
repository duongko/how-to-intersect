const Router = require("express").Router()
const product = require("../models/productschema")

Router.get("/", (req, res) => {

    product.find((err, docs) => {
        var productarray = [];
        var productsize = 3;
        for (var i = 0; i < docs.length; i += productsize) {
            productarray.push(docs.slice(i, i + productsize))
        }
        res.render("homemain", { product: productarray })
    })

})
module.exports = Router