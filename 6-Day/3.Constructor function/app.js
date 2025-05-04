// factory function is a type of function that is used to create and return objects

// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     fullName: function () {
//       console.log(
//         `Hello Im ${this.firstName} ${this.lastName} , and I love ${this.pl}`
//       );
//     },
//   };
// }

// const koushik = createPerson("koushik", "sai", "python");

// koushik.fullName();

// challenge -> type, model, brand, year

function createVehicle(type, model, brand, year) {
  return {
    type,
    model,
    brand,
    year,
  };
}

const vehicle1 = createVehicle("car", "suv", "toyota", 2022);

console.log(vehicle1);
