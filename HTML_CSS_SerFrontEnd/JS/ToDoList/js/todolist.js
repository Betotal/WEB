;(function (){
    "use strict";

    // Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input") // campo
    const toDoAddForm = document.getElementById("todo-add") // formulário
    const ul = document.getElementById("todo-list")
    const li_s = ul.getElementsByTagName("li")

    let arrTasks = [
        { // objeto do array
            name: "Exemplo",
            createAt: Date.now(),
            completed: false
        },
        { // objeto do array
            name: "Task Exemplo",
            createAt: Date.now(),
            completed: false
        }

    ]

    function generateLiTask(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"
        
        checkButton.className = "button-check"
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i'
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)

/////////     aula 565   ////////////////////////////////
        //  criando container de edicao
            let containerEdit = document.createElement("div")
            containerEdit.className = "editContainer"

            const inputEdit = document.createElement("input")
            inputEdit.setAttribute("type", "text")
            inputEdit.className = "editInput"
            containerEdit.appendChild(inputEdit)
            inputEdit.value = obj.name

        // criando botao de edição dentro do contaienr    
            const containerEditButton = document.createElement("button")
            containerEditButton.className = "editButton"
            containerEditButton.textContent = "Edit"
            containerEditButton.setAttribute("data-action", "containerEditButton")
            containerEdit.appendChild(containerEditButton)

        // criando botao de cancelamento dentro do contaienr    
            const containerCancelButton = document.createElement("button")
            containerCancelButton.className = "cancelButton"
            containerCancelButton.textContent = "Cancel"
            containerCancelButton.setAttribute("data-action", "containerCancelButton")
            containerEdit.appendChild(containerCancelButton)

            li.appendChild(containerEdit)
////////////////////////////////////////////////////////
//        deleteButton.classList.add("fas", "fa-trash-alt")
        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

//        addEventLi(li)
        return li
    }

    function renderTask(){
        ul.innerHTML = ""
        arrTasks.forEach(taskObj => {
                ul.appendChild(generateLiTask(taskObj))
        })
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }

    function clickedUl(e){
        //#region 
        //  console.log(e.target)
        //  console.log(e.target.getAttribute("data-action"))
        ////        if (e.target.className === "fa-edit"){  // não re
        // comendado
        //        if (e.target.getAttribute("data-action") === "e
        // ditButton"){
        //  console.log ("clicou no edit") 
        //        }
        //#endregion             
        
        const dataAction = e.target.getAttribute("data-action")
        if (!dataAction) { return }

        let currentLi = e.target
        while (currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...li_s].indexOf()

        const action = {    //criando e usando objeto, como retorno do atributo
            editButton: function(){
            //    console.log("editButton no objeto")
                const editContainer = currentLi.querySelector(".editContainer");
                [...ul.querySelectorAll(".editContainer")].forEach(container =>{
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";
            },
            deleteButton: function(){
                arrTasks.splice(currentLiIndex,1)
                renderTask() //renderiza a pagina
            //    currentLi.remove()  // remove o elemento da interface
            //    currentLi.parentElement.removeChild(currentLi)
            },
            containerEditButton: function(){
                const valTexto = currentLi.querySelector(".editInput").value
                debugger
                console.log(valTexto)
                console.log(arrTasks[currentLiIndex].name)
                arrTasks[currentLiIndex].name = valTexto
                renderTask() //renderiza a pagina
            },
            containerCancelButton: function(){

            }
        }
        if(action[dataAction]){
           action[dataAction]()
        }
    }

    // function addEventLi(li){
    //     li.addEventListener("click", function(){
    //         console.log(this)
    //     })
    // }

    toDoAddForm.addEventListener("submit", function (e){
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTask()
        
        itemInput.value = ""
        itemInput.focus()
    });

    ul.addEventListener("click", clickedUl)


    renderTask();

})();
