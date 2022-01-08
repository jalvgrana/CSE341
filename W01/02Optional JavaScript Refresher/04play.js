//************************************************/
// let & const (2:27)
//************************************************/
const name = "Max";
console.log(name);

let age = 29;
const hasHobbies = true;

//name = "Maximilian";
age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
