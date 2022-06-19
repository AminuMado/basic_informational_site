const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8080;
let path = "./index.html";
const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url);
  switch (req.url) {
    case "/":
      path = "./index.html";
      break;
    case "/about":
      path = "./about.html";
      break;
    case "/contact":
      path = "./contact.html";
      break;
    default:
      path = "./404.html";
      break;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else res.end(data);
  });
});
server.listen(port, () => {
  console.log("listening for requests on 8080");
});
