

//Operator Instanceof
//Operator Instanceof sama seperti typeof, namun ini khusus untuk mengecek apakah sebuah object merupakan intance object didalam class tertentu.

class employee {

}

class manager {

}

irzi = new employee();
zaxchax = new manager();


console.info(typeof irzi); //ini hanya akan menghasilkan object

console.info(irzi instanceof employee); //true
console.info(zaxchax instanceof employee); //false 
console.info(zaxchax instanceof manager); // true