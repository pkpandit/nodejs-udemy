const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;
  const log = `\n [${Date.now()}]: ${method} ${path}`;
  fs.appendFileSync("log.txt", log, "utf-8");
  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end("Hello from the server 👍");
          case "/contact":
            return res.writeHead(200).end("This is the contact page.");
          case "/tweet":
            return res.writeHead(200).end("This is the tweet page get method.");
        }
      }
      break;
    case "POST": {
      switch (path) {
        case "/tweet":
          return res
            .writeHead(201)
            .end("Tweet posted successfully and post method");
      }
    }
  }
  return res.writeHead(404).end("Not Found");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
