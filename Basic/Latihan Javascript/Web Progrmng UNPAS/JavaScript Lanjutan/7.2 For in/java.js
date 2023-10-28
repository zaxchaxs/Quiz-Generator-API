


    // 7.2 For in

const mhs = {
    nama: 'irzi Rahmatullah',
    umur: '19',
    email: 'blblblalb@gmail.com'
};

// tidak bisa palai for of
// for (const m of mhs) {
//     console.log(m)   
// };

// For in
// for (const m in mhs) {
//     console.log(m)
// };

// Value
for (const m in mhs) {
    console.log(mhs[m])
};


