//------------------
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
//------------------
// (2)
// Callback & Callback hell
// function sum(a, b) {
//   console.log(a + b);
// }
//------------------
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(20, 20, (a, b) => {
//   console.log(a + b);
// });
//------------------
// Nested loop
// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j <= 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }
//
// Callback Hell
//------------------
// function getData(dataId, nextData) {
//   setTimeout(() => {
//     if (nextData) {
//       nextData();
//     }
//     console.log("Data :", dataId);
//   }, 2000);
// }

// getData(10, () => {
//   getData(20, () => {
//     getData(30);
//   });
// });
//------------------
// Promises
//
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a Promise (:)");
//   // resolve(100);
//   reject("got some ERROR :(");
// });
//--------------
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("data :", dataId);
//       // resolve("got data successfully");
//       reject("Not Getting data yet ");
//     }, 8000);
//   });
// }
//
// let some = getData("name list");
//
//
//-----------
// const dataPromise = (getData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (getData) {
//         console.log("data :", getData);
//         resolve("Succesful !");
//       } else {
//         reject("ERROR");
//       }
//     }, 5000);
//   });
// };

// let some = dataPromise("Name List....");

// some.then((res) => {
//   console.log("Status:", res);
// });

// some.catch((err) => {
//   console.log("Status :", err);
// });
//
//--------------------------
// Promise Chain
// function asyncFunc1(getData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (getData) {
//         console.log("Data1....", getData);
//         resolve("Success !");
//       } else {
//         reject("Failed ");
//       }
//     }, 4000);
//   });
// }

// function asyncFunc2(getData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (getData) {
//         console.log("data2", getData);
//         resolve("Success !");
//       } else {
//         reject("Failed 2");
//       }
//     }, 4000);
//   });
// }

// console.log("Fetching data1...");
// let p1 = asyncFunc1("Ibrahim");

// p1.then((res) => {
//   console.log("Status :", res);
//   console.log("----------------");
//   console.log("Fetching Data2...");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log("Status :", res);
//   });
// });
//--------------------------
// Promise chain 2 real
//

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (dataId) {
//         console.log("Data :", dataId);
//         resolve("Success :)");
//       } else {
//         reject("Failed :(");
//       }
//     }, 3000);
//   });
// }

// getData("Mohammad").then(() => {
//   return getData("Faizuddin").then(() => {
//     return getData("Farid").then(() => {
//       return getData("Ibrahim").then((res) => {
//         console.log("Status :", res);
//       });
//     });
//   });
// });
//
//------------------------------
// (3)
// async await
//

// function api(Data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data :", Data);
//       resolve("Success :)");
//     }, 2000);
//   });
// }

// async function gettingData() {
//   console.log("getting data1...");
//   await api("Mohammad");
//   console.log("getting data2...");
//   await api("Faizuddin");
//   console.log("getting data3...");
//   await api("Fareed").then((res) => {
//     console.log("Status :", res);
//   });
// }

// gettingData();
//
//------------------------
// IIFE (Immediately Invoked Function Expression)
//
// (function () {
//   console.log("hello");
// })();

// (() => {
//   console.log("hiiii");
// })();

// (async () => {
//   await console.log("Bye Bye !");
// })();
