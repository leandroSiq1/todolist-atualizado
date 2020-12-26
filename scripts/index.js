const iconEdit = "fas fa-pencil-alt";
const iconDelete = "far fa-trash-alt";
const display = document.getElementById("display");
const input = document.getElementById("tarefa");

function createTask() {

    let value = input.value;

    let task = document.createElement("div");
    let icons = document.createElement("div");
    let p = document.createElement("p");
    let iconEdite = document.createElement("i")
    let iconDel = document.createElement("i")

    if(value != "") {
        display.appendChild(task);
    task.classList.add("task");
    task.id = "task";
    task.appendChild(p);
    task.appendChild(icons);
    
    icons.onclick = function remove() {
        this.parentElement.remove();
    }

    iconEdite.classList = iconEdit;
    iconDel.classList = iconDelete;

    icons.appendChild(iconEdite);
    icons.appendChild(iconDel);

    p.innerText = value;
    
    input.value = "";      
    }
}

function remove() {
    this.remove();
}
