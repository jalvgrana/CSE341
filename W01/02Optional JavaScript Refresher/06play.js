//************************************************/
// Working with Objects, Properties & Methods (3:19)
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
    //   greet: function () { //alternative option
    //     console.log("Hi, I am " + this.name);
    //   }
  },
};

person.greet();
