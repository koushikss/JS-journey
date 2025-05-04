// this
// this keyword doesnt work with arrow functions 
const person = {
  firstname: "koushik",
  lastname: "sai",
  greet: function () {
    return `Hi , Im ${this.lastname} ${this.firstname}`;
  },
};

console.log(person.greet(0));
