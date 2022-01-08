//************************************************/
// Async Code & Promises (10:28)
//************************************************/
// setTimeout(() => {
//   console.log("Time is done!");
// }, 2000);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Time is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
