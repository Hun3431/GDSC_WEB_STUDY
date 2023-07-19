const todoList = document.getElementById("todo-list");
const inputValue = document.getElementById("todo-input");

const createTodo = () => {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  // 할 일 완료 버튼
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });

  // 더블클릭 삭제
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
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

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
};
