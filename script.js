
function addTask() {
    // Selecting elements using DOM

    const addBtn = document.getElementById('add-todo')
    const input = document.getElementById('input-todo')
    const task = input.value.trim();

    if (task === "") {
        alert ("Enter A Task To Add")
        return;
    }

    const li = document.createElement('li')
    li.textContent = task;

   document.getElementById('task-list').appendChild(li);  

}

const input =  document.getElementById('input-todo');

document.getElementById('add-todo').addEventListener('click', addTask);



