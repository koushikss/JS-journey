// rest operator
// this allows function to accept infinite number of parameters

function user(...UserData) {
  console.log(UserData);
}
user("John", 22, "programmer", "canada");

//exersise

function unlimitedParams(...params) {
  console.log(params);
}

unlimitedParams("John", 22, "programmer", "singing", "dancing");
