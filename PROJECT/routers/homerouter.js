const Router = require("express").Router()
const product = require("../models/productschema")
const fileController = require("../controller/productcontrol")

Router.get("/trangchu", (req, res) => {

    product.find((err, docs) => {
        var productarray = [];
        var productsize = 3;
        for (var i = 0; i < docs.length; i += productsize) {
            productarray.push(docs.slice(i, i + productsize))
        }
        res.render("homemain")
    })

})


Router.get("/create", (req, res) => {
    let products = [
        {
            title: "ao dai",
            img: "/img/anh4.jpg",
            price: 1200,
            size: ['xl', 's'],
        },
        {
            title: "ao dai",
            img: "./img/anh2.jpg",
            price: 1200,
            size: ['xl', 's'],
        },
        {
            title: "ao cut",
            img: "./img/anh2.jpg",
            price: 500,
            size: ['xl', 's'],
        },
        {
            title: "ao dai",
            img: "./img/anh3.jpg",
            price: 1200,
            size: ['xl', 's'],
        },
        {
            title: "ao dai",
            img: "./img/anh4.jpg",
            price: 9999,
            size: ['xl', 's'],
        },
        {
            title: "ao dai",
            img: "./img/anh6.jpg",
            price: 1394,
            size: ['xl', 's'],
        },
        {
            title: "ao dai",
            img: "./img/anh10.jpg",
            price: 1200,
            size: ['xl', 's'],
        },
    ]
    for (let i = 0; i < products.length; i++) {

        fileController.createProduct(products[i])
    }


})
module.exports = Router