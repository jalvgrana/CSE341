//************************************************/
// Using the Node Modules System (10:05)
//************************************************/
const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
