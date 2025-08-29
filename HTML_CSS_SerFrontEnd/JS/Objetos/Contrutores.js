function Task(name){
    let _oldName = name
    let _newName = name
    this.createAt = new Date()
    this.updataAt = null
    this.ChangeName = function (newName){
        this._newName =  newName
        this.updataAt = new Date()
    };

    this.GetOldName = function(){
        return _oldName
    };
    this.GetNewName = function(){
        return _newName
    }
}

const task1 = new Task("minha tarefa")
console.log(task1)

const task2 = new Task("Segunda tarefa")
console.log(task2)

task1.ChangeName("Minha tarefa Atualizada")
console.log(task1)

console.log(task1.GetNewName())

