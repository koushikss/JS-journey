// function destructuring

const person = {
  name: "koushik",
  age: "22",
  gender: "male",
};

function printPersonInfo({ name, age, gender }) {
  console.log(name);
  console.log(age);
  console.log(gender);
}
printPersonInfo(person);
