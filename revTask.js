//1. Create a function that checks if a user is eligible to vote (age, citizenship, registered voter)
// function isEligibleToVote(age, isCitizen, isRegistered) {
//   if (age > 18 && isCitizen && isRegistered) {
//     console.log("User is eligible to vote.");
//   } else {
//     console.log("User is not eligible to vote.");
//   }
// }
// isEligibleToVote(20, true, true);

function isEligibleToVote(age,nationality,isRegistered){
  return age > 17 && nationality == "nigerian" && isRegistered ? "eligible  to vote" : "not eligible to vote"
}
let eligible=isEligibleToVote(18,"nigerian", true)
// console.log(eligible)


// 2. Create a function that will allow a user to register if he has an email or a phone number
// function registerUser(name, email, phone) {
//   if (email || phone) {
//     console.log(`${name} has been registered successfully.`);
//   } else {
//     console.log(
//       `${name} cannot be registered without an email or phone number.`
//     );
//   }
// }
// registerUser("nanbam", "1234567890");

function registerUser(email, phoneNumber){
  return email || phoneNumber ? "register successful" : "not register"
}
let register=registerUser("same@")
// console.log(register)

//3. Create a function that will check if a user is not a minor
// function isNotMinor(age) {
//   if (age >= 18) {
//     console.log("User is not a minor.");
//   } else {
//     console.log("User is a minor.");
//   }
// }
// isNotMinor(17);

function isNotMinor(age){
  return !(age < 18) ? "is not a minor" : "is minor"
}

// console.log(isNotMinor(19))
// 4. Create a function that will return a default if the value is not set
function returnDefault(value) {
  if (typeof value === "undefined") {
    console.log("default");
  } else {
    console.log(value);
  }
}
// returnDefault();

function returnDefault(value){
  if(value){
    return true
  }else{
    return "default";
  }
}
// console.log(returnDefault())

let users=[]
function userRegister(name,age,level){
  let newId=users.length + 1
  return {newId,name,age,level}
}
// let reg=userRegister("nam",12,200)
users.push(userRegister('mary',20,200))
users.push(userRegister('abdul',10,100))
users.push(userRegister('mina',30,400))
users.push(userRegister('praise',24,400))
users.push(userRegister('tims',30,400))
// console.log(users)

// 5. Create a function that will return a list of fruits if the list is not empty
function getFruits(fruits) {
  if (fruits && fruits.length > 0) {
    return fruits;
  } else {
    return false;
  }
}
let fruitList = getFruits(['mango', 'orange', 'guava']);
console.log(fruitList);