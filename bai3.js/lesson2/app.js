// var loibh = "  mot con vit ";
// console.log(loibh);
// // // var a = loibh.split(" ");
// // // for (let i = 0; i < a.length; i++) {
// // //     setTimeout(function () {
// // //         console.log(a[i]);

// //     }, 1000);
// loibh = loibh.trim();

// while (loibh.includes(" ")) {
//     loibh = loibh.replace(" ", " ")
// }
// console.log(":" + loibh + ":");
// var a = loibh.split(" ");
// for (let i = 0; i < a.length; i++) {
//     setTimeout(function () {
//         console.log(a[i]);

//     }, 1000);
//}
//bai2
// var x = 3;
// var y = 2;
// function sum(a, b) {
//     sum = a + b;
//     console.log(" sum= " + sum);
// }
// sum(x, y);
// //cach 2
// let sum1 = function (a, b) {
//     return a + b;
// };
//  ecma script 6
// let tong3 = (a, b) => {
//     return a + b;
// };
// let tong4 = (a, b) => a + b;
//console.log(tong4(1, 2))
let timkiem = function (mxh) {
    return function (tennguoidung) {
        return mxh + tennguoidung;
    }
};
const linkfb = "http://facebook.com/";
const linkins = " http://instagam.com/";
let tkfb = timkiem(linkfb);
let nam = tkfb("nam0");
console.log(nam);
let str1 = "day la string 1''''''";

let x1 = 100;
let x2 = 10;
let strx = "day la x2" + (x2 + x1);
let strxx = `dalaf tong 5 voi 10: ${x2 + x1}`;
console.log(strxx);
console.log(strx);
