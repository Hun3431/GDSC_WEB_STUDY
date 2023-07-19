const todoList = document.getElementById("todo-list");
const inputValue = document.getElementById("todo-input");

const keyCodeCheck = () => {
  if (window.event.keyCode === 13 && inputValue.value != "") {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = inputValue.value;
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    inputValue.value = "";
  }
};
