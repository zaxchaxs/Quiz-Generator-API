

        // Callback

// SetInterval
// salah satu method yang ada di async method

const  setTime = () => {
    const header = document.getElementById('header');
    header.textContent = new Date().toString();


}
setInterval(setTime, 1000)