const product = require("../models/productschema")
const mongoose = require("mongoose")
let product=[
    {
        title: "ao dai",
        img: "/img/anh4.jpg",
        price: 1200,
        size: ['xl','s'],
    },
   {
        title: "ao dai",
        img: "./img/anh2.jpg",
        price: 1200,
        size: ['xl','s'],
    },
    {
        title: "ao cut",
        img: "./img/anh2.jpg",
        price: 500,
        size: ['xl','s'],
    },
    {
        title: "ao dai",
        img: "./img/anh3.jpg",
        price: 1200,
        size: ['xl','s'],
    },
    {
        title: "ao dai",
        img: "./img/anh4.jpg",
        price: 9999,
        size: ['xl','s'],
    },
   {
        title: "ao dai",
        img: "./img/anh6.jpg",
        price: 1394,
        size: ['xl','s'],
    },
   {
        title: "ao dai",
        img: "./img/anh10.jpg",
        price: 1200,
        size: ['xl','s'],
    },
]
// let done=0
// for(let i=0;i<products.length;i++){
    
//     products[i].save((err,resuft)=>{
//         if(i === products.length){
//         Exit()
//         }
//     })
// }
// // mongoose.disconect()
