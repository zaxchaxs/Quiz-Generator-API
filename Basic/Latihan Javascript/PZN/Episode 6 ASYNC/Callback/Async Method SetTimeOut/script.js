

        // Callback

// SetTimeOut
// salah satu method yang ada di async method

const header = () => {
    const header2 = document.createElement('h2');
    header2.textContent = 'Penghargaan pahlawan kanterbury terbaik jatuh kepada...';

    document.body.appendChild(header2);
}
setTimeout(header, 2000);

const addElement = () => {
    const header2 = document.createElement('h2');
    header2.textContent = '......';

    document.body.appendChild(header2);
}
setTimeout(addElement, 4000);


const addElement2 = () => {
    const header = document.createElement('h1');
    header.textContent = 'Irzi Rahmatullah!!!';

    document.body.appendChild(header);
}
setTimeout(addElement2, 6000);



const addElement3 = () => {
    const header2 = document.createElement('h2');
    header2.textContent = 'Karena menggunakan setTimeOut, program ini akan dijalankan tanpa menunggu program diatasnya. Padahal code ini berapa dipaling bawah.';

    document.body.appendChild(header2);
}
addElement3();