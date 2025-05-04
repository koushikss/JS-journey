// map() method creates a new array populated with the results of calling a provided function on every element in the calling array

let numbers = [1, 2, 3, 4, 5];

double = numbers.map((num) => num * 2);

console.log(double);

// converting object to array

peoples = [
  { firstname: "virat", lastName: "kohli" },
  { firstname: "MS", lastName: "dhoni" },
  { firstname: "Rohit", lastName: "Sharma" },
];

const results = peoples.map((person) => {
  return [person.firstname, person.lastName];
});

console.log(results);

// create array with random numbers
// map over each item in that array , and multiply each item by 10

nums = [6, 5, 4, 7, 9, 4];

mul_by10 = nums.map((nums) => nums * 10);

console.log(mul_by10);
