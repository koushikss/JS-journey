// Strings
let firstName = "sandu ";
let lastName = "SaiKoushik";

// Concatenation
// method 1
let fullName = firstName + lastName;
console.log(fullName); // Output: sai Koushik

// method 2
let fullName2 = firstName.concat(lastName);
console.log(fullName2); // Output: sai Koushik

// // append
// firstName += lastName;
// console.log(firstName); // Output: sai Koushik

// length
console.log(firstName.length); // Output: 11

// cases
console.log(firstName.toUpperCase()); // Output: SAI KOUSHIK
console.log(firstName.toLowerCase()); // Output: sai koushik

// slice
console.log(firstName.slice(1, 3)); // Output: an

// split and join
console.log(firstName.split("").join("-"));

// includes -> check whether the letter is present or not
console.log(firstName.includes("S")); // Output: true

// trim
console.log(firstName.trim()); // Output: sandu SaiKoushik

// f string (string formatter)
let text = `this is the text 
 1
 2
 3
 4`;
console.log(text); // Output: this is the text 1 2 3 4

console.log(`${firstName} ${lastName}`);
