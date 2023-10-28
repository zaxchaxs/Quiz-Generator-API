
// Web Server Node JS

const http = require('http');
const fs = require('fs')
const port = 3000;


// Code seperti ini memang bisa, tapi kita bisa lebih membuatnya menjadi lebih efisien dengan cara chaining
// const server = http.createServer((req, res) => {

// })

// server.listen(3000, () => {
//     console.log(`listening on port 3000!`);
// })


// Cara menjalankannya sama seperti biasa di terminal.
// Lalu masuk ke browser dan ketik localhost: 3000(sesuai portnya.)

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead('404')
            res.write('Error : File tidak ditemukan');
        } else {
            res.write(data);
        };
        res.end();
    });
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-Type': 'text/html'
    });

    const url = req.url;
    if (url === '/about'){
        renderHTML('./about.html', res);
    } else if (url === '/contact') {
        renderHTML('./contact.html', res)
    } else {
        renderHTML('./index.html', res);
    };

}).listen(port, () => {
    console.log(`listening on port ${port}!`);
});