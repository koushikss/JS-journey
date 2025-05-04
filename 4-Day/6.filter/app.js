// filter() is a built in array method that is used to create a new array containing elements that pass a certain condition, It provides A CLEAN and concise way to filter out elements from an array based on specific criteria

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "just like you", duration: 3.23 },
  { name: " The search", duration: 2.33 },
];

console.log(songs.filter((song) => song.duration > 3));

// challenge

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];

console.log(computers.filter((computer) => computer.ram > 16));

// challenge 2
const ages = [18, 32, 45, 33];

console.log(ages.filter((age) => age > 18));

// challenge3
const words = ["spray", "destruction", "laptop", "bottle", "watch"];
// print whose lenggth > 6

console.log(words.filter((word) => word.length > 6));
