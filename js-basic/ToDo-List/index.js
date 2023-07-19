const todoList = document.getElementById("todo-list");
const inputValue = document.getElementById("todo-input");

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const createTodo = (storageData) => {
  let todoContents = inputValue.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  // 할 일 완료 버튼
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItems();
  });

  // 더블클릭 삭제
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItems();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  inputValue.value = "";
  saveItems();
};

const keyCodeCheck = () => {
  if (window.event.keyCode === 13 && inputValue.value != "") {
    createTodo();
    saveItems();
  }
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
    localStorage.removeItem("saved-items");
  }
};

const saveItems = () => {
  const Items = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    Items.push(todoObj);
  }
  Items.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(Items));
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}
