//************************************************/
// Arrays, Objects & Reference Types (2:13)
//************************************************/
// const person = {
//   name: "Max",
//   age: 29,
// };

// console.log(person);

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
person.greet();

//Arrays
// const hobbies = ["Sports", "Cooking", 1, true, {}];
// for (let hobby of hobbies) {
//   console.log("Array item: ", hobby);
// }

const hobbies = ["Sport", "Cooking"];
// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);
hobbies.push("Programming");
console.log(hobbies);
