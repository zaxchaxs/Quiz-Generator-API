const routes = [
    {
        method : "GET",
        path : "/",
        handler : (request, h) => {
            return `Homepage!!!`;
        }
    },
    {
        method : "*",
        path : "/",
        handler : (request, h) => {
            return `Halaman dapat diakses menggunakan Method tersebut.`
        }
    },
    {
        method : "GET",
        path : "/about",
        handler : (request, h) => {
            return `Ini adalah halaman about!`
        }
    },
    {
        method : "GET",
        path : "/user/{username?}",
        handler : (request, h) => {
            const {username = "Stranger"} = request.params;
            const {lang} = request.query;

            if(lang === "id") {
                return `Hello ${username}`;
            };
            return `Hallllllllow ${username}`;
            
        }
    },
    {
        method : "POST",
        path : "/about",
        handler : (request, h) => {
            return ``
        }
    },
    {
        method : "*",
        path : "/about",
        handler : (request, h) => {
            return `Halaman tidak dapat diakses menggunakan method tersebut.`
        }
    },
    {
        method : "*",
        path : '/{any*}',
        handler : (request, h) => {
            return `Halaman tidak dapat dijangkau.`
        }
    }
];

module.exports = {routes};