

    // Event
const text = document.getElementById("texts");


const blank = document.getElementById("blank-space");
blank.addEventListener("click", function(event){
    text.textContent = `You click at the aqua blank space in coordinate ${event.x}, ${event.y}`;
});