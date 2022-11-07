const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // 괄호 안에 (input) 이렇게 하는 거랑 같음
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  console.log(toDoInput.value);
  toDoInput.value = "";
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
