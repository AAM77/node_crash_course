// const Person = require('./person');
//
// const person1 = new Person(`John Doe`, 30);
//
// person1.greeting();

// for user with logger.js

// const Logger = require('./logger');
//
// const logger = new Logger();
//
// logger.on('message', (data) => console.log('Called Listener:', data));
//
// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'),
    (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content)
    })
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
