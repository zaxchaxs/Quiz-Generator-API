//Construcstor Inheritance

//Kita bisa memanggil contructor lain kedalam construcstor utama.
// ini function yg akan dimasukkan.
   function OrangGila (param1, param2) {   
    this.firstName1 = param1;
    this.lastName = param2;
    this.sayHello = function (haha) {
        console.info(`Hi ${firstName1}, my name is ${haha}.`)
    }
   }



//dan ini fucntion yg akan dimasukkan.
function OrangSehat(paramet1, paramet2) {
    this.firstName = "IRZOT"
    this.lastName = "ZAXCHAXS"
    OrangGila.call(this, paramet1, paramet2);  //memakai kata kunci .call untuk memanggil constructor function diatas
    
}
       

const mega = new OrangSehat("irzi", "rahmatullah");
console.info(mega);