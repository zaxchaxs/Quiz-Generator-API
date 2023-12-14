
const { nanoid } = require('nanoid');
const books = require('./books');

const addBooksHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount == readPage;

    const newBooks = {id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt};
    
    if(name == undefined) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })
        response.code(400);
        return response;
    };

    if(readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    };
    
    books.push(newBooks);

    const isSucces = books.filter((book) => book.id === id).length > 0;
    
    if(isSucces){
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    };
    
};

const getAllBooks = (request, h) => {
    const { name, reading, finished } = request.query;
    // const filterdBooks = books;
    const resultMap = books.map( book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
    }));

    // if(name !== undefined) {
    //     filterdBooks.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));
    // };
    // if(reading !== undefined) {
    //     filterdBooks.filter(book => book.reading === (reading === 1 || reading == true) );
    // };
    // if(finished !== undefined) {
    //     filterdBooks.filter(book => book.finished === (finished === 1 || finished == true));
    // }


    if(name) {
        const response = h.response({
            status: 'success',
            data: {
                books: resultMap.filter(book => book.name.toLowerCase().includes(name.toLowerCase())),
            },
        });
        response.code(200);
        return response;
    };

    const booksReading = books.filter(book => Number(book.reading) === Number(reading));
    const booksFinished = books.filter(book => Number(book.finished) === Number(finished));

    if(reading){
        const response = h.response({
            status: 'success',
            data: {
                books: booksReading.map(book => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        });
        response.code(200);
        return response;
    };

    if(finished) {
        const response = h.response({
            status: 'success',
            data: {
                book: booksFinished.map(book => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'success',
        data: {
            books: resultMap,
        },
    });
    response.code(200);
    return response;
};

const getBookByIdHandler = (request, h) => {
    const { id } = request.params;
    
    const book = books.filter(book => book.id === id)[0];
    if(book !== undefined){
        const response = h.response({
            status: 'success',
            data: {
                book,
            },
        });
        response.code(200);
        return response;
    };

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
};


const editBooksByIdHandler = (request, h) => {
    
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const { bookId } = request.params;
    const finished = pageCount == readPage;
    
    const index = books.findIndex(book => book.id === bookId);
    
    if(name == undefined) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        })
        response.code(400);
        return response;
    };
    
    if(readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    };

    if(index !== -1){
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt: new Date().toISOString(),
            finished,
        };
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    };

    const resonse = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    resonse.code(404);
    return resonse;
};

const delBooksByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const index = books.findIndex(b => b.id === bookId);

    if(index !== -1) {
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    };
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan'
    });
    response.code(404);
    return response;
    

};

module.exports = { addBooksHandler, getAllBooks, getBookByIdHandler, editBooksByIdHandler, editBooksByIdHandler, delBooksByIdHandler};