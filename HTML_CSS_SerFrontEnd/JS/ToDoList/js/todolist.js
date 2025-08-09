;(function (){
    "use strict";

    // Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input") // campo
    const toDoAddForm = document.getElementById("todo-add") // formulário
    const toDoUl = document.getElementById("todo-list")
//    const li_s = toDoUl.getElementsByTagName("li")

    let arrTasks = [
        { // objeto do array
            name: "Exemplo",
            createAt: Date.now(),
            completed: false
        }
    ]

    function generateLiTask(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("i")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"
        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        checkButton.className = "button-check"
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i'
        li.appendChild(checkButton)

//
//        editButton.className = "fas fa-edit"
//        li.appendChild(editButton)
//
//    //  criando container de edicao
//        const containerEdit = document.createElement("div")
//        containerEdit.className = "editContainer"
//        const inputEdit = document.createElement("input")
//        inputEdit.setAttributeNS("type", "text")
//        inputEdit.className = "editInput"
//        containerEdit.appendChild(inputEdit)
//
//    // criando botao de edição dentro do contaienr    
//        const containerEditButton = document.createElement("button")
//        containerEditButton.className = "edit-button"
//        containerEditButton.textContent = "Edit"
//        containerEdit.appendChild(containerEditButton)
//
//    // criando botao de cancelamento dentro do contaienr    
//        const containerCancelButton = document.createElement("button")
//        containerCancelButton.className = "cancel-button"
//        containerCancelButton.textContent = "Cancel"
//        containerEdit.appendChild(containerCancelButton)
//
//        li.appendChild(containerEdit)
//
//        //        deleteButton.classList.add("fas", "fa-trash-alt")
//        deleteButton.className = "fas fa-trash-alt"
//        li.appendChild(deleteButton)

        addEventLi(li)
        return li
    }

    function renderTask(){
        toDoUl.innerHTML = ""
        arrTasks.forEach(taskObj => {
                toDoUl.appendChild(generateLiTask(taskObj))
        })
    }

    function addEventLi(Li){
        Li.addEventListener("click", function(){
            console.log(this)
            console.log(this.textContent)
            console.log(this.innerText)
            console.log(this.innerHTML)
            console.log(this.outerHTML)
        })
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false

        })
        
    };

    toDoAddForm.addEventListener("submit", function (e){
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTask()

        itemInput.value = ""
        itemInput.focus()
    });

    renderTask()

})();
