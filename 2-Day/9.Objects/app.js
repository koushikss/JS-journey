const person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
};

console.log(person);

// accessing items from object
console.log(person.name);
console.log(person.age);

person.loction = "earth";
console.log(person);

// delete an element
delete person.age;
console.log(person);

// exersise

const car = {
  type: "Audi",
  model: "Xuv",
  color: "red",
};
console.log(typeof car);
console.log(car);
car.type = "toyota";
console.log(car);
car.wheels = 4;
console.log(car);
