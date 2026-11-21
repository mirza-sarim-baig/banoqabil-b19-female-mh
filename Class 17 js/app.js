// keyword, (variable dec, condition, inc/dec),  block of code
// for(){}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140];

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

let email = "ahdmed@gmail.com";

let usersArr = [
  {
    name: "sarim",
    email: "sarim@gmail.com",
    pass: "sarim123",
  },
  {
    name: "ali",
    email: "ali@gmail.com",
    pass: "ali123",
  },
  {
    name: "ahmed",
    email: "ahmed@gmail.com",
    pass: "ahmed123",
  },
];

let flag = false;

for (let i = 0; i < usersArr.length; i++) {
  //   console.log(i);
  //   console.log("value in", value);
  if (usersArr[i].email === email) {
    console.log("user found", i);
    flag = true;
    break;
  }
  //   else {
  //     console.log("user not found", i);
  //   }
  //   console.log(usersArr[i].email);
}

if (flag == false) {
  console.log("user not found");
}

// console.log("value out", value);
