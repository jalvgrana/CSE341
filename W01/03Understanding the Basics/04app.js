//************************************************/
// The Node Lifecycle & Event Loop (4:53)
//************************************************/
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

server.listen(3000);

//run node "name of file" and reload the website localhost:3000ç
//and will terminate the process
