// require modules
const http = require('http');
const app = require('./app');

// port
const port = process.env.PORT || 3000;

// server
const server = http.createServer(app);
server.listen(port);
console.log(`server started on port ${port}`);