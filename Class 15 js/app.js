// prompt("helo");

let head = document.getElementById("heading");
console.log(head);

head.style.color = "red";
head.style.backgroundColor = "black";

// head.innerText = "<i>xyz</i>";
// head.innerHTML = "<i>xyz</i>";

// let userObj1 = {
//   name: "yasir",
//   email: "yasir@gmail.com",
// };

// localStorage.setItem("username", "habib");
// let userName = localStorage.getItem("username");
// console.log(userName);
// localStorage.setItem("userObj", JSON.stringify(userObj1));
// let userObj1 = localStorage.getItem("userObj");
// console.log(JSON.parse(userObj1));

// 1: User enters Data

let userName = prompt("Enter your username");
let userEmail = prompt("Enter your email");
let userPass = prompt("Enter your password");

// 2: Data structuring

let userObj = {
  name: userName,
  email: userEmail,
  pass: userPass,
};

// 3: Check either the user already exist or not

// case 1: Data exist
// case 2: Storage is empty

let dbUser = localStorage.getItem("userObj");
if (dbUser) {
  dbUser = JSON.parse(dbUser);
} else {
  dbUser = {
    name: "dummy name",
    email: "dummy email",
    pass: "dummy pass",
  };
}
console.log(dbUser);
