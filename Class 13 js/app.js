// let greetUser = (parameter(placeholders))=>{block of code }

// let greetUser = (greetMsg) => {
//   console.log(greetMsg);
//   console.log("condition 1");
//   console.log("condition 2");
//   console.log("condition 3", akldklj);
//   console.log("condition 4");
//   console.log("condition 5");
// };

// greetUser("how are you");

let num1 = +prompt("Enter number 1");
let num2 = +prompt("Enter number 2");
let opr = prompt("Enter operator, +,-,*,/");

let calculation = (num1, num2, opr) => {
  if (opr == "+") {
    console.log(num1 + num2);
  } else if (opr == "-") {
    console.log(num1 - num2);
  } else if (opr == "*") {
    console.log(num1 * num2);
  } else if (opr == "/") {
    console.log(num1 / num2);
  } else {
    console.warn("Please select correct operator");
  }

  //   console.log(num1 opr num2);
};

calculation(num1, num2, opr);

let userObj = {
  id: 1,
  name: "yasir",
  email: "yasir@gmail.com",
  pass: 12345,
};

// let authentication = ()=>{
//     username
//     useremail

//     condition
//     userObj.name == username, userObj.email == useremail
//     if yes then authenticated
//     else not authenticated
// }

// let sum = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sum(num1, num2);

// let sub = (num1, num2) => {
//   console.log(num1 - num2);
// };

// sub(num1, num2);

// let mul = (num1, num2) => {
//   console.log(num1 * num2);
// };

// mul(num1, num2);

// let div = (num1, num2) => {
//   console.log(num1 / num2);
// };

// div(num1, num2);
