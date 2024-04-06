const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World!');
        res.end();
    }

    if(req.url === '/api/app-info'){
        const appInfo = {
            version: '1.0.0',
            name: 'NodeJS Crash Course'
        };
        res.write(JSON.stringify(appInfo));
        res.end();
    }
});

server.listen(3200);
console.log("Listening in port 3200 ...");