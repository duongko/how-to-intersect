 const Router = require("express").Router();
 const product = require("../models/productschema")
 const {
     createProduct,
     readAllProduct,
     updateProduct,
     deleteProduct
 } = require("../controller/productcontrol");
 Router.get("/create-product", async (req, res) => {
     let products =
     {
         title: "ao dai",
         img: "/img/anh4.jpg",
         price: 1200,
         size: ['xl', 's'],
     },



     await createProduct(products);
     res.render("homemain");
 });
 
             module.exports= Router