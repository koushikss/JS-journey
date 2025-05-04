// switch statements

// switch (expression){
//case x:
//print
//break;
//case y:
//print
//break;
//}

let x = 0;

switch (x) {
  case 0:
    text = "off";
    console.log(text);
    break;
  case 1:
    text = "on";
    console.log(text);
    break;
  default:
    text = "no Value found";
    console.log(text);
}

let day = "monday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// exersise

let fruit = "banana";
switch (fruit) {
  case "banana":
    console.log("banana is good");
    break;
  case "orange":
    console.log("I'm not fan of Orange");
    break;
  case "apple":
    console.log("How you like them apples");
    break;
  default:
    console.log("I have never heard of that fruit");
}
