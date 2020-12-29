const iconDelete = "far fa-trash-alt";
const display = document.getElementById("display");
const input = document.getElementById("tarefa");

function createTask() {

    let value = input.value;
    let task = document.createElement("div");
    let icons = document.createElement("div");
    let p = document.createElement("p");
    let iconDel = document.createElement("i")

    let btn = document.getElementById("btnEdit");

    if(value != "") {
        display.appendChild(task);
        task.classList.add("task");
        task.id = "task";
        task.appendChild(p);
        task.appendChild(icons);

        icons.classList = "icons";
        icons.appendChild(iconDel);
        iconDel.classList = iconDelete;

        task.children[1].children[0].addEventListener("click", ()=>{
            task.remove();
            if(display.childNodes.length < 1) {
                btn.style.display = "none";  
            }
        });

        p.innerText = value;   
        btn.style.display = "flex";
        input.value = "";
        
    }
    
}

function edit() {
    let title = document.getElementById("h1One");
    let title2 = document.getElementById("h1Two");
    let container = document.getElementById("container");
    let displayEdit = document.getElementById("edit");
    let displayInputs = document.getElementById("inputs");

    // displayEdit.style.display = "flex";
    title2.style.display = "flex";
    displayInputs.style.display = "none";
    title.style.display = "none";

    // container.style.display = "initial";
    // container.style.flexDirection = "initial";
    // container.style.alignItems = "initial";
}