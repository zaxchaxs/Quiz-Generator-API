const { addBooksHandler, getAllBooks, getBookByIdHandler, editBooksByIdHandler, delBooksByIdHandler } = require("./handlers")


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,

    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: delBooksByIdHandler,
    },
];

module.exports = routes;