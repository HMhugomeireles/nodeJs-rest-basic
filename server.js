const http = require('http');
const app = require('./app');

const port = process.env.PORT || 4545;
const server = http.createServer(app);

server.listen(port);
console.log('Server start on port:' + port);