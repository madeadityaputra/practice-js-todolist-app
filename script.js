const todoList = [];

function clearTodoList() {
  const todolistBody = document.getElementById("todolistBody");

  while (todolistBody.firstChild) {
    todolistBody.removeChild(todolistBody.firstChild);
  }
}

function removeTodoList(index) {
  todoList.splice(index, 1);
  display();
}

function addTodoList(index, todo) {
  const tr = document.createElement("tr");

  const tdButoon = document.createElement("td");
  tr.appendChild(tdButoon);

  const btnDone = document.createElement("input");
  btnDone.type = "button";
  btnDone.value = "Done";
  btnDone.onclick = function () {
    removeTodoList(index);
  };
  tdButoon.appendChild(btnDone);

  const tdList = document.createElement("td");
  tdList.textContent = todo;
  tr.appendChild(tdList);

  const todolistBody = document.getElementById("todolistBody");
  todolistBody.appendChild(tr);
}

function display() {
  clearTodoList();

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo);
    }
  }
}

document.getElementById("todoForm").onsubmit = function (event) {
  event.preventDefault();

  const todo = document.getElementById("todo").value;
  todoList.push(todo);

  document.getElementById("todoForm").reset();

  display();
};

const serachInput = document.getElementById("search");

serachInput.onkeyup = function () {
  display();
};
serachInput.onkeydown = function () {
  display();
};

display();
