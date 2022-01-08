//************************************************/
// Sending Responses (5:37)
//************************************************/
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js</h1></body>");
  res.write("</html>");
  res.end;
});

server.listen(3000);

//running the script with node 04app.js and having localhost:3000 connection
