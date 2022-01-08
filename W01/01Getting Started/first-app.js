//************************************************/
// Installing Node.js and Creating our First App (7:41)
//************************************************/

console.log("Hello from Node.js");

const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello from Node.js");
