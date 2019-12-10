//async await
let delay = async function () {
    for (let i = 0; i < 80000; i++) {
        for (let j = 0; j < 80000; j++) {
            var k;
        }
    }
}
let asfunncn = async () => {

    console.log("dfd");
    await delay();//delay o duoi thuc hien tu tren xuong duoi
    console.log("end");

};

console.log("begin res");
asfunncn();
console.log("end");
