const http = require('node:http');

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

server.listen(8000);
