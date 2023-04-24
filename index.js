
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
// console.log(todoInput);
// console.log(todoForm);
todoForm.addEventListener("submit", (e) => {
    // this used to stop when we submit a form 
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-button">
       <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
      
   </div>`;

    newLi.innerHTML = newLiInnerHtml;
    //    console.log(newLi);
    //    todoList.append(newLi)
    todoList.prepend(newLi)
    todoInput.value = "";
    // console.log("form submitted");
})
todoList.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    //for done
    if (e.target.classList.contains("done")) {
        // console.log("remove content")
        const lispan = e.target.parentNode.previousElementSibling;
        // console.log(lispan);
        var a = lispan.style.textDecoration = "line-through";


    }

    //for remove
    if (e.target.classList.contains("remove")) {
        // console.log("remove content")
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
});