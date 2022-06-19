const http = require("http");
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  console.log("request made");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello,World!</h1>");
});
server.listen(port, () => {
  console.log("listening for requests on 8080");
});
