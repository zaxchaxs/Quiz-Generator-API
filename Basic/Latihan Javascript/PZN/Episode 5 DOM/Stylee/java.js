

        // Style
const blankSpace = document.getElementById('blankSpace');
const buttons = document.querySelectorAll("input");

for (const button of buttons) {
    button.addEventListener("click", function(){
        blankSpace.style.backgroundColor = button.getAttribute("value");
    })
}


 // global event

// for (const button of buttons) {
//     button.onclick = function (){
//         blankSpace.style.backgroundColor = button.getAttribute("value");
//     }
// }