/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };
    notes.push(newNote);

    const isSucces = notes.filter((note) => note.id === id).length > 0;

    if (isSucces) {
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil dibuat!',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'Fail',
        message: 'Catatan gagal dibuat!',
    });
    response.code(500);
    return response;
};

// Function untuk menampilkan notes
const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    },
});

// Function untuk melihat detail notes
const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter(n => n.id === id)[0];
    if(note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    };

    const response = h.response({
        status: 'Fail',
        message: 'Catatan tidak ditemukan!',
    });
    response.code(404);
    return response;
};

// Function untuk mengubah/edit catatan
const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const {title, tags, body} = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex(note => note.id === id);
    if(index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };

        const response = h.response({
            status: 'Success',
            message: 'Berhasil memeperbarui data.'
        });
        response.code(200);
        return response;
    };
    
    const response = h.response({
        status: 'FAIL',
        message: 'Gagal memperbarui data. Id tidak ditemukan',
    });
    response.code(400);
    return response;
};

// Function untuk delete Notes
const deleteNoteByIdHandlers = (request, h) => {
    const { id } = request.params;
    const index = notes.findIndex(note => note.id === id);

    if( index === -1){
        const response = h.response({
            status: 'Fail',
            message: 'Gagal untuk menghapus data.',
        });
        response.code(404);
        return response;
    };
    
    notes.splice(index, 1);
    const response = h.response({
        status: 'Success',
        message: 'Berhasil menghapus notes.'
    });
    response.code(200);
    return response;
};


module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandlers };
