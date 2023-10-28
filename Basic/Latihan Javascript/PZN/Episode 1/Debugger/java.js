

//Debugger
// Fitur untuk mencari bug

//contoh
function createFullName(firstName, middleName, lastName) {
    debugger; //caranya tambahkan ini.
    const fullName = (`${firstName} ${middleName} ${lastName}`);
    return fullName
}

const name = createFullName ("Irzi", "Rahmatullah", "Zaxchaxs");
console.info (name);