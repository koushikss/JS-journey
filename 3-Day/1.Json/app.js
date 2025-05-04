// JSON -> JavaScript Object notation

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
// json stringify -> convert to Json
const personJson = JSON.stringify(person);
console.log(personJson);

// json parse -> get back to object type
const personParsed = JSON.parse(personJson);
console.log(personParsed); //
