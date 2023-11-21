/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

// Coba di http://notesapp-v1.dicodingacademy.com/
// Tapi disable dulu same origin policy in chrome nya. dengan C:\Users\USER\AppData\Local\Google\Chrome\Application\chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security


const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
