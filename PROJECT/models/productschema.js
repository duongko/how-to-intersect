const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    title: String,
    img: String,
    price: Number,
    size: Array,
})


let  ProductModel  = mongoose.model("product", schema)
module.exports= ProductModel 