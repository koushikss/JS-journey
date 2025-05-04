import { Pi, getArea, getCircumfernce } from "./mathUtil.js";

console.log(Pi);
const area = getArea(10);
console.log(area.toFixed(2));

const circumference = getCircumfernce(10);
console.log(circumference.toFixed(2));
