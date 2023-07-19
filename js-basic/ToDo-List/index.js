const todoList = document.getElementById("todo-list");
const inputValue = document.getElementById("todo-input");

const createTodo = () => {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });
  newSpan.textContent = inputValue.value;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  inputValue.value = "";
};

const keyCodeCheck = () => {
  if (window.event.keyCode === 13 && inputValue.value != "") {
    createTodo();
  }
};
