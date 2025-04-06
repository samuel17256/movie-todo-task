let myTodos = [];
function  addTask (title){
    let todosId=myTodos.length + 1;
    let isComplete=false;
    let newTodo =  {
        title : title,
        id : todosId,
        completed:isComplete,
    }
    myTodos.push(newTodo)
}
addTask("Eating")
addTask("Coding")
addTask("Sleeping")
addTask("Coding")
// console.log(myTodos)

function taskDone (todoId){
    for (let todos of myTodos){
        if (todos.id === todoId){
        //    todos.completed = true
            // console.log(`task ${todos.id} is done`)
        }else if(todos.id !== todoId){
            // console.log(`task ${todos.id} is undone`)
        }
    }  
}
// console.log(myTodos)
taskDone (1)

function todoComplete(todoId){
    let comp=[];
    let pending=[];
 return myTodos.filter((todo)=>{
    if (todo.id === todoId){
        todo.completed=true
        comp.push(todo)
         console.log("completed", comp)
     }else if(todo.id !== todoId){
        pending.push(todo)
         console.log("pending", pending)
     }
 })
}

todoComplete(3)
