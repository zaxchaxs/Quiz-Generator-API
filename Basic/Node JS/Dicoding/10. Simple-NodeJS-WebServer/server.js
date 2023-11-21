const http = require('http');


const requestListeners = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    const { method, url } = request;

    /* Jalankan server lalu ketik di commandpromt / di browser juga bisa dengan ikuti path nya : 
        curl -X GET http://localhost:3000/
        curl -X GET http://localhost:3000/about
        curl -X POST http://localhost:3000/
        curl -X POST -H "Content-Type: application/json" http://localhost:3000/about -d "{\"name\" : \"Irzi Rahmatullah\"}"
        curl -X PUT http://localhost:3000/
        curl -X PUT http://localhost:3000/about
        curl -X DELETE http://localhost:3000/
        curl -X DELETE http://localhost:3000/about
        */  
    if(url === '/') {
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : "Ini adalah homepage!"  
            }));
        } else {
            response.statusCode = 404;
            response.end(`Halaman homepage tidak ditemukan dengan menggunakan method ${method}!`);
        };
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : "Halo! ini adalah halaman About!"
            }))

        // Jalankan server, lalu ketik curl -X POST -H "Content-Type: application/json" http://localhost:3000 -d "{\"name\" : \"Irzi Rahmatullah\"}"
        } else if(method === 'POST') {
            let body = [];
            request.on('data', chunk => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message : `Halo ${name}, I hope you'll always HAPPY!!!`
                }));
            });

        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({
                message : "Halaman url tidak ditemukan!"
            }));
        };
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message : "Halaman tidak ada!"
        }));
    };
}

const server = http.createServer(requestListeners);

const port = 3000; 
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
});