const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

const server = http.createServer((req, res) => {
  // Parse the request URL
  const url = new URL(req.url, `http://${hostname}:${port}`);

  // Check the request method and route
  if (req.method === 'GET' && url.pathname === '/users') {
      // Respond with JSON data of users
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users));
  } else {
      // Handle other routes or methods
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
  }
});

server.listen(3000 , () => {
  console.log(`Server running at PORT 3000`);
});
