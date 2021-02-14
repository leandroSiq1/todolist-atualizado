const tasks = [];

const Task = {
    display: document.querySelector("#display"),

    createTask(tasks, index) {
        const html = `
                <div class="check">
                    <input type="checkbox" >
                </div>
    
                <div class="content">
                    <p>${tasks}</p>
                    <i class="fas fa-trash-alt" onclick="Task.remove(${index})"></i>
                </div>
        `
        
        return html;
    },

    remove(index) {
        tasks.splice(index, 1)

        App.reload();
    },

    addTask() {
        const input = document.getElementById("inputTask");
        const description = input.value;

        if(description === "") {
            if(Task.display.childNodes.length < 6) {
                Alerts.alertInsertText();
                return;
            }    
        }

        if(description === "") {
            if(Task.display.childNodes.length <= 6) {
                Alerts.numberMaxTask();
                return;
            }   
        }

        if(Task.display.childNodes.length < 6) {
            tasks.push({description: description});
            App.reload();
            Alerts.alertSucess();
        }
    },

    addTaskDisplay(task, index) {
        const div = document.createElement('div');

        div.classList.add("task");
        div.classList.add("animate");
        div.dataset.index = index;

        div.innerHTML = Task.createTask(task.description, index);
        Task.display.appendChild(div);

        Task.clearInput();
    },

    keyValidate(event) {
        event.key === "Enter" ? Task.addTask() : false;
    },

    clearInput() {
        const input = document.getElementById("inputTask");
        input.value = "";     
    },

    bloqInput(input) {
        if(Task.display.childNodes.length >= 6) {
            input.value = "";
            setTimeout(()=> {
                Alerts.numberMaxTask();
            }, 500)
        }
    },

    clearTasks() {
        Task.display.innerHTML = "";
    },
}

const Alerts = {

    alertInsertText() {
        const alert = document.querySelector(".alert#alert");

        if(alert.classList.length == 1) {
            alert.classList.add("active");
          
            setTimeout(() => {
                alert.style.opacity = '0';
                setTimeout(() => {
                    alert.classList.remove("active");
                    alert.style.opacity = ''; 
                }, 1000);

            }, 3500);
        }
    },

    alertSucess() {
        const alert = document.querySelector(".alert-sucess#alert");

        if(alert.classList.length == 1) {
            alert.classList.add("active");
          
            setTimeout(() => {
                alert.style.opacity = '0';
                setTimeout(() => {
                    alert.classList.remove("active");
                    alert.style.opacity = ''; 
                }, 1000);

            }, 3500);
        }
    },

    numberMaxTask() {
        const alert = document.querySelector(".alert-max-task#alert");

        if(alert.classList.length == 1) {
            alert.classList.add("active");
          
            setTimeout(() => {
                alert.style.opacity = '0';
                setTimeout(() => {
                    alert.classList.remove("active");
                    alert.style.opacity = ''; 
                }, 1000);

            }, 3500);
        }
    },

    getNamesAlerts() {
        const alert = document.querySelectorAll("body #alert");

        return {
            alertInsert: alert[0].className,
            alertSucess: alert[1].className,
            alertMax: alert[2].className,
            // alertDelete: alert[3].className
        }
    },

    closeAlert() {
        const alert = document.querySelectorAll("body #alert");

        for(let i = 0; i < alert.length; i++) {
            let active = "active"; 
            let totalAlerts = { alertInsert,  alertSucess, alertMax, alertDelete } = Alerts.getNamesAlerts();

            let alertInsertText = `${totalAlerts.alertInsert} ${active}`;
            let alertSucessInsert = `${totalAlerts.alertSucess} ${active}`;
            let alertMaximum = `${totalAlerts.alertMax} ${active}`;
            let alertDeleteSucess = `${totalAlerts.alertDelete} ${active}`;

            if(alert[i].className == alertInsertText || alertSucessInsert || alertMaximum ||alertDeleteSucess) {
                setTimeout(() => {
                    alert[i].style.opacity = '0';
                    setTimeout(() => {
                        alert[i].classList.remove("active");
                        alert[i].style.opacity = '';
                    }, 1000);

                }, 100);
            }

        }

    }
}

const App = {
    init() {
        tasks.forEach((task, index)=> {
            Task.addTaskDisplay(task, index)
        });
    },

    reload() {
        Task.clearTasks();
        App.init();
    }
}

App.init();