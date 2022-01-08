//************************************************/
// Understanding Arrow Functions (5:17)
//************************************************/
const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

// const summarizeUser = function summarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// };

// console.log(summarizeUser(name, age, hasHobbies));

const summarizeUser = (userName, userAge, userHasHobby) => {
  //arguments
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => {
  return a + b;
};
const add1 = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

console.log("add:", add(1, 2));
console.log("add1:", add1(1, 2));
console.log("addOne:", addOne(1));
console.log("addRandom:", addRandom());

console.log(summarizeUser(name, age, hasHobbies));
