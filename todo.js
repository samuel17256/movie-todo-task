let myTodos = [];

//function add a task
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


//function cheking if task is done
function taskDone (todoId){
    for (let todos of myTodos){
        if (todos.id === todoId){
           todos.completed = true
            console.log(`task ${todos.id} is done`)
        }else if(todos.id !== todoId){
            console.log(`task ${todos.id} is undone`)
        }
    }  
}
// taskDone (1)
// console.log(myTodos)


//function checking if todo is completed
let comp=[];
let pending=[];
function todoComplete(todoId){
  myTodos.filter((todo)=>{
    if (todo.id === todoId){
        todo.completed=true
        comp.push(todo)
     }else if(todo.id !== todoId){
        pending.push(todo)
     }
 })
 console.log("completed task", comp)
console.log("pending tasks", pending)
}
// todoComplete(3)



//function delete todo
function deleteTodo(todoId){
    myTodos.forEach((todo)=>{
        if(todo.id !=todoId){
            console.log(todo)
        }
    })
}
// deleteTodo(3)