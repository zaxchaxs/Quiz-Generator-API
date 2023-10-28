

const allTodoList = [
    "Sholat boy",
];

// menghapus value yg sudah disubmit
function clearTodoList (){
    const todoListBody = document.getElementById("todoListBody")
    while(todoListBody.firstChild){
        todoListBody.removeChild(todoListBody.firstChild);
    }
}

function removeTodoList (index){
   allTodoList.splice(index, 1);
   displayTodoList();
}

// search input
function addTodoList(index, todo){
    const tr = document.createElement('tr');
    const tdButton = document.createElement('td');
    tr.appendChild(tdButton);

    const buttonDone = document.createElement('input');
    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function (){
        removeTodoList (index);
    }
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement('td')
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todoListBody = document.getElementById("todoListBody");
    todoListBody.appendChild(tr);
}

// menambahkan value yg di input kedalam todo list
function displayTodoList(){
    clearTodoList();
    
    for (let i = 0; i < allTodoList.length; i++) {
        const todo = allTodoList[i];
        
        const searchText = document.getElementById("search").value.toLowerCase();

        if (todo.toLowerCase().includes(searchText)){
            addTodoList(i, todo);
        }
    }
}


// Input data ke allTodoList
document.forms['todoForm'].onsubmit = function (event){
    event.preventDefault();

    const todo = document.forms['todoForm']['todos'].value;
    allTodoList.push(todo);

    document.forms['todoForm'].reset();
    
    console.info(allTodoList)
displayTodoList();
}

const search = document.getElementById("search");
search.onkeyup = function (){
    displayTodoList();
}
search.onkeydown = function (){
    displayTodoList(); 
}

displayTodoList();
