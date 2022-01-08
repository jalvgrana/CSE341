//************************************************/
//Creating a Node Server (13:22)
//************************************************/
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);

//with webbrowser running localhost:3000
//& type on console node "name of file" to see the output
