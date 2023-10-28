

// Alias

/* Alias untuk merubah nama function, class, variable dll tanpa merubah nama tersebut.
Dan alias tidak direkomendasikan digunakan di export
kata kuncinya (as), lalu dilanjutkan nama lainnya. */

function sum (param1, param2){
    result = param1 + param2;
};

const company = "PoshMan"

class teddyBear {

}

export {sum, company, teddyBear};

// export {sum as total, company as perusahaan, teddyBead as Beruang};
// bisa saja seperti ini, tapi ini tidak disarankan. Lebih baik gunakan as di import html nya.