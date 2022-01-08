//************************************************/
// Understanding Spread & Rest Operators (6:40)
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

const copiedPerson = { ...person };
console.log(copiedPerson);

//Arrays
// const hobbies = ["Sports", "Cooking", 1, true, {}];
// for (let hobby of hobbies) {
//   console.log("Array item: ", hobby);
// }

const hobbies = ["Sport", "Cooking"];
// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);
// hobbies.push("Programming");
// console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3));

const toArray1 = (...args) => {
  return args;
};
console.log(toArray1(1, 2, 3, 4, 5));
