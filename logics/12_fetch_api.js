// const URL =
//   "https://bobsburgers-api.herokuapp.com/characters/?limit=12&skip=451";

// const getData = async () => {
//   console.log("Getting Data....");
//   let response = await fetch(URL);
//   let data = await response.json();
//   // console.log(data[0]);
//   for (let i = 0; i <= data.length; i++) {
//     console.log(data[i]);
//   }
// };
// getData()
//   .then(() => {
//     console.log("Status : Success");
//   })
//   .catch((err) => {
//     console.log("status :", err);
//   });

//
// AJAX = Asynchronous javaScript & XML
// JSON = Javascript Object Notaion
// AJAJ = Asynchronous JavaScript & Json

// console.log("Getting data1...");
// getData(URL).then((res) => {
//   console.log("Status :", res);
//   console.log("Getting data2...");
//   return getData(URL1).then((res) => {
//     console.log("status :", res);
//     console.log("Getting data3...");
//     return getData(catUrl).then((res) => {
//       console.log("Status :", res);
//     });
//   });
// });
