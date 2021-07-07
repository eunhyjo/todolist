//https://www.youtube.com/watch?v=Ttf3CEsEwMQ&t=2196s
//from 30mins - delete function
// from 41mins - filter

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo); // 항목 추가하기
todoList.addEventListener('click', deleteCheck); // 항목 지우기 
filterOption.addEventListener('click', filterTodo); // 필터

//Functions

function addTodo(event) {
   //prevent form from submitting
   event.preventDefault();
   //Todo DIV
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   //Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value; // 입력시 텍스트 출력되는 곳
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //CHECK MARK BUTTON
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //CHECK TRASH BUTTON
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   //APPEND TO LIST
   todoList.appendChild(todoDiv); 
   //Clear Todo Input Value
   todoInput.value = "";  // 할일 입력 후 인풋 리셋(비워주기)  
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// does not work!!
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
       switch(e.target.value){
          case "all": 
          todo.style.display = "flex";
          break;
          case "completed":
               if(todo.classList.contains('completed')){
                todo.style.display = "flex";
               } else{
                todo.style.display = "none";
            }
              break;
           case "uncompleted":
               if(!todo.classList.contains('completed')){
                todo.style.display = "flex";
               } else{
                todo.style.display = "none";
            }
            break;
       } 
    });
} 