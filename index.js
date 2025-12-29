const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Incoming request at [${Date.now}]`);
  console.log(req.url);
  // Routing logic
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end(`homePage`);

    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end(`AboutPage`);

    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end(`ContactPage`);

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
