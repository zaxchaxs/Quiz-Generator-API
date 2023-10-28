/* untuk mengetahui tipe data nya itu apa.*/

let data = "13"; //<<<< ganti datanya
 
if (typeof data === "number"){
    alert("Ini tipe data number!");
} else if (typeof data === "string") {
    alert("Ini tipe data string");
} else if (typeof data === "boolean") {
    alert("Ini tipe data Boolean");
}