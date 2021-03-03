const http = require('http');
const static = require('node-static');
const Server = static.Server;
const file = new Server('.');
const port = 3555;

http.createServer(function (req, res) {file.serve(req, res);}).listen(port);

console.log(`Server running on port ${port} `);
