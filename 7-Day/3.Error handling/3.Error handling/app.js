// error = an object that is created to represent a problem that occurs often with user input

// try {} = encloses code that might potentially cause errors

// catch{} = catch and handle any thrown error from try {}
//  finally {} =  (optional) always executes .Used mostly for clean up  ex: close files , close connections, release resources

// try {
//   console.log(x);
// } catch (error) {
//   console.error(error);
// }

// console.log("Task is running ....!!!");

try {
  const divisor = Number(window.prompt("enter a divisor"));
  const dividend = Number(window.prompt("enter dividend"));
  if (isNaN(divisor || isNaN(dividend))) {
    throw new Error("must be a number ");
  }
  if (divisor == 0) {
    throw new Error("number cant be zero");
  }
} catch (error) {
  console.error(error);
}
console.log("This is a task ..!!");
