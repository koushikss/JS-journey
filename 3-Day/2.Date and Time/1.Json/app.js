const date = new Date();

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentMilliseconds = currentDate.getMilliseconds();

console.log(`Current Date : ${currentDate}`);
console.log(`Current Year : ${currentYear}`);
console.log(`Current Month : ${currentMonth}`);
console.log(`Current Day : ${currentDay}`);
console.log(`Current Hour : ${currentHour}`);
console.log(`Current Minute : ${currentMinute}`);
console.log(`Current Milliseconds : ${currentMilliseconds}`);

// let currentDate = new Date();

console.log(`Current Date in ISO Format: ${currentDate.toISOString()}`);
console.log(`Current Date in UTC String : ${currentDate.toUTCString()}`);
console.log(`Current Date in Locale String: ${currentDate.toLocaleString()}`);
console.log(
  `Current Date in Locale Date String: ${currentDate.toLocaleDateString()}`
);
console.log(
  `Current Date in Locale Time String: ${currentDate.toLocaleTimeString()}`
);
