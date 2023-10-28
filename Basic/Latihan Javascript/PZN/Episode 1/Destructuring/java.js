

//Destructuring
//Destructuring untuk membongkar value2 yang ada didalam arah/ object kedalam variable baru.

//Jika manual tidak menggunakan destructuring
const names = ["Irzi", "Rahmatullah", "Zaxhchax", "Rahmatanlilalamin"];
const firstName = names[0];
const middleName = names[1];
const lastName = names[2];
const otherName = names[3];

console.info(firstName);
console.info(middleName);
console.info(lastName);
console.info(otherName);


//Jika menggunakan Destructuring
const names1 = ["Irzi", "Rahmatullah", "Zaxhchax", "Rahmatanlilalamin", "wkwkw", "haha"] ;
const [firstName1, middleName1, lastName1, otherName1, ...others] = names1

console.info(firstName1);
console.info(middleName1);
console.info(lastName1);
console.info(otherName1);
console.info(others);