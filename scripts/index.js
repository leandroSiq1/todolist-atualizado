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

        icons.classList = "icons";
        iconEdite.classList = iconEdit;
        iconDel.classList = iconDelete;

        icons.appendChild(iconEdite);
        icons.appendChild(iconDel);
    
        icons.childNodes[1].addEventListener("click", () => {
            icons.childNodes[1].parentNode.parentNode.remove();
        });

        icons.childNodes[0].addEventListener("click", () => {
            edit(icons.childNodes[0].parentNode.parentNode);
            confirmEdit(icons.childNodes[0].parentNode.parentNode);
        });

        p.innerText = value;
        
        input.value = "";      
    }
}

function remove() {
    this.remove();
}

function edit() {
    let display = document.getElementById("display");
    let boxInput = document.getElementById("inputs");
    let edit = document.getElementById("edit");

    display.style.display = "none";
    boxInput.style.display = "none";
    edit.style.display = "flex";

}

function confirmEdit(element) {
    let confirm = document.getElementById("confirm");
    confirm.style.display = "flex";

    let newTask = document.getElementById("editInput");
    let value = newTask.value;

    console.log(value)  




    // element.childNodes[0]

}