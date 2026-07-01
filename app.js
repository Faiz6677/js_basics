// (1)
// Set Time out function
// function printSomething() {
//   console.log("One");
//   console.log("Two");
//   console.log("Three");
//   console.log("Four");
// }
// console.log("Start !");
// setTimeout(() => {
//   console.log("middle !");
// }, 5000);
// console.log("Stop !");
//
// (2)
// Callback & Callback hell
// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(20, 20, (a, b) => {
//   console.log(a + b);
// });
//
// Nested loop
// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j <= 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }
//

function getData(dataId) {
  setTimeout(() => {
    console.log(dataId);
  }, 2000);
}

// let dataSet = getData("id3322");

getData("this is an ID");
