let user = {
  id: 1,
  userName: "xyz",
  email: "xyz@gmail.com",
  pNo: "9090909099",
  gender: "male",
};

user.education = "bscs";
user.pNo = "9090";

let val = prompt("Enter a val");
console.log("val", val);
console.log(user[val]);

let car = {
  uid: 4090,
  modal: 2025,
  color: "black",
  brand: "Toyota",
  owner: "xyz",
  reg: {
    regNo: "BBK-989",
    chasisNo: "Bh-94839",
    engineNo: "908bhk",
  },
};

console.log(car.reg.engineNo);
