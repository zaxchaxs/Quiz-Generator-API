function tagFunction(arr, ...args) {
    console.log(`Console log param arr : ${arr}`);
    console.log(`Console log param args : ${args}`);
};

test('tag function', () => {
    const name = 'Irzi';
    const name2 = 'Marsha'

    // Memanggil functionnya seperti ini, menggunakan backtick bukan kurung buka/tutup.
    tagFunction`Halo ${name}, how was your day?`;
    tagFunction`What about ${name2}?`;
});

test("Tag function sql", () => {
    const productCategories = 'Fruit';
    const condition = 'Fresh';
    tagFunction`SELECT * FROM users WHERE productCategories = ${productCategories} AND condition = ${condition}`;
})