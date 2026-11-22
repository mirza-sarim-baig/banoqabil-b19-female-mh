testing();
// console.log(value);
const usersArr = JSON.parse(localStorage.getItem("users")) || [];

const signupFunc = () => {
  console.log("execeute");

  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPass = document.getElementById("userPass").value;

  const userObj = {
    name: userName,
    email: userEmail,
    pass: userPass,
  };

  usersArr.push(userObj);

  console.log(usersArr);

  localStorage.setItem("users", JSON.stringify(usersArr));
  //   console.log("userName", userName);
  //   console.log("userEmail", userEmail);
  //   console.log("userPass", userPass);
};

// global variables
// function/block scope variable

let gloScopeVar = " I am global scope";

function testing() {
  let funcScopeVar = "I am function scope";
  console.log(funcScopeVar);
  // console.log(gloScopeVar, "inside funtion");

  // if (true) {
  //   let blockScopeVar = "I am block scope";
  //   console.log("blockScopeVar inside block", blockScopeVar);
  // }
  // console.log("blockScopeVar inside func", blockScopeVar);
}

// const value = 39;
// console.log(gloScopeVar);
// console.log(funcScopeVar);

// console.log("blockScopeVar outside func", blockScopeVar);
