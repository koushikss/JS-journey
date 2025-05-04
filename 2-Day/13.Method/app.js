function greet() {
  return `Hello , my name is ${person.name} , im ${person.age} years old`;
}

const person = {
  name: "John",
  age: 30,
  greet,
};

console.log(person.greet());
