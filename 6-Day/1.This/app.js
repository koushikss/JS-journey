console.log(window === this);

// const obj = {
//   firstName: "Koushik",
//   lastName: "sai",
//   fullName: () => {
//     return `${this.firstName} and ${this.lastName}`;
//   },
// };
// const res = obj.fullName;
// console.log(res);

const person = {
  name: "koushik",
  age: 22,
  greetRegular: function () {
    return `hello my name is ${this.name} and im ${this.age} years old`;
  },
  greetArrow: () => {
    return `hello my name is ${this.name} and im ${this.age} years old`;
  },
};

console.log(person.greetRegular());

console.log(person.greetArrow());
