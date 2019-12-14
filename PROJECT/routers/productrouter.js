const Router = require("express").Router();


Router.get("/", (req, res) => {
    res.render("mainproduct")
    
})
module.exports = Router

//lay san pham tu database roi gui len thay du lieu tinh
//voi moi anh khi click vao se co 1 router moi tim du lieu cua anh day thong qua id
//dung id de truy xuat lai du lieu (anh, ten,gia tien)