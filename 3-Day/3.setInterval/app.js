// setInterval

const intervalId = setInterval(
  () => console.log("this will print for every 2 seoncds"),
  2000
);

// stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("interval stopped");
}, 10000);

// // setTimeOut
// setTimeout(() => {
//   console.log("this function print only once after 3 seconds");
// }, 3000);

