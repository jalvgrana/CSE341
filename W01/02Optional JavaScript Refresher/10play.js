//************************************************/
// Destructuring (5:37)
//************************************************/
const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// const printName = (personData) => {
//   console.log(personData.name);
// };

// printName(person);

const printName = ({ name, age }) => {
  console.log("First option: ", name, age);
};
printName(person);

const { name, age } = person;
console.log("Second option: ", name, age);

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
