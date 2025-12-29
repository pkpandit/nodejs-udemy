const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Incoming request at [${Date.now}]`);
  console.log(req.url);
  switch (req.url) {
    case "/":
      req.writeHead(200);
      return res.end(`homePage`);

    case "/about":
      req.writeHead(200);
      return res.end(`AboutPage`);
    case "/contact":
      req.writeHead(200);
      return res.end(`ContactPage`);
    default:
      res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
