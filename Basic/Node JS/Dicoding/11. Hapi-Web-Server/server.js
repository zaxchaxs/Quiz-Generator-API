const hapi = require('@hapi/hapi');
const { routes } = require('./routes');

const init = async () => {
    const server = hapi.server({
        port : 3000,
        host : 'localhost'
    });

    // server.route({
    //     method: "GET",
    //     path : "/",
    //     handler : (request, h) => {
    //         return `Hello ${request.params.user}!`;
    //     }
    // });
    server.route(routes)

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init()


/* jalankan pada commanpromt : 
    curl -X GET http://localhost:3000
    curl -X GET http://localhost:3000/about
    curl -X GET http://localhost:3000/user/${value}
    curl -X GET http://localhost:3000/user/${value}?lang=id
    curl -X POST http://localhost:3000/
    dan method yg lain, bisa mengoutputkan nilai berbeda.

*/