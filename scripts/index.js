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

            if(display.childNodes.length < 1 || null) {
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
    let displayInputs = document.getElementById("inputs");
    var displayEdit = document.getElementById("edit");

    title2.style.display = "flex";
    displayInputs.style.display = "none";
    title.style.display = "none";
    displayEdit.classList = "edit ts";

    for(let task of display.childNodes) { 
        
        task.style.pointerEvents = "initial";

        task.addEventListener("click", () =>{
            let title = document.getElementById("h1Two");
            task.classList = "alo task";

            for(let clas of display.childNodes) {
                if(task.classList != clas.classList) {
                    clas.style.display = "none";
                }
            }

            if(displayEdit.classList != "edit") {
                displayEdit.style.display = "flex";
                title.style.display = "none";
            }
        });
    }
}

function setValueKey(event) {
    event.key == "Enter" ? createTask() : false;
}

function setValueKeyEdit(event) {
    if(event.key == "Enter") {
        editar();
        sucessEdit();
        addIcon();
    }
}

function removeIcon() {
    for(let task of display.childNodes) {
        if(task) {
            let iconDel = task.children[1].children[0];
            iconDel.remove();
        }
    }
}

function addIcon() {
    let btn = document.getElementById("btnEdit");
    for(let task of display.childNodes) {
        let iconDel = document.createElement("i");
        iconDel.classList = iconDelete;
        task.children[1].appendChild(iconDel);
        task.children[1].style.pointerEvents = 'initial';

        iconDel.addEventListener("click", ()=> {
            iconDel.parentElement.parentElement.remove();
            sucessEdit();

            for(let task5 of display.childNodes) {
                task5.style.display = "flex";
                console.log(task5);
            }
        
            if(display.childNodes.length < 1 || null) {
                btn.style.display = "none";  
            }
        });
    }
}

function editar() {
    for(let task of display.childNodes) {
        if(task.classList.length > 1) {
            let p = task.childNodes[0];
            let text = document.getElementById("editInput");

            p.innerText = text.value;
            text.value = "";
               
            task.classList = "task";
        }
    }
}

function sucessEdit() {
    let title = document.getElementById("h1One");
    let displayEdit = document.getElementById("edit");
    let title2 = document.getElementById("h1Two");
    let displayInputs = document.getElementById("inputs");

    title2.style.display = "none";
    displayInputs.style.display = "flex";
    displayEdit.style.display = "none";
    title.style.display = "flex";
    displayEdit.classList = "edit";

    setTimeout(()=> {
        for(let task of display.childNodes) {
            task.style.display = "flex";
            task.style.pointerEvents = 'none';
            console.log("entrei aqui")
        }
    }, 5);
}