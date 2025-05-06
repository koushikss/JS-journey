// callback hell -> callbacks are nested within other callbacks
// -> Use promises + async/await to avoid callback hell

function task1(callback) {
  setTimeout(() => {
    console.log("this is task 1");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("this is task 2");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("this is task 3");
    callback;
  }, 500);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All the task are completed");
    });
  });
});
