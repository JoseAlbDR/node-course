const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") return res.end("Hello, world!");
  if (req.url === "/about") return res.end("About page!");
  return res.end(
    `<h1>Opps!</h1><p>We can't seem to find the page you are looking for.</p><a href="/">Bring me back</a>`
  );
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
