import { Todo } from "./models/Todo";

let todos: Todo[] = JSON.parse(localStorage.getItem("todos")) || [];

window.onload = function () {
  document.getElementById("save").addEventListener("click", addTodo);

  createHtml();
};

function addTodo() {
  let input: HTMLInputElement = document.getElementById(
    "todo"
  ) as HTMLInputElement;

  let newTodo: Todo = new Todo(input.value);
  todos.push(newTodo);
  input.value = "";
  createHtml();
}

function createHtml() {
  localStorage.setItem("todos", JSON.stringify(todos));
  let todolist: HTMLUListElement = document.getElementById(
    "todolist"
  ) as HTMLUListElement;

  todolist.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let li: HTMLLIElement = document.createElement("li");
    let span: HTMLSpanElement = document.createElement("span");
    let markAsDoneButton: HTMLButtonElement = document.createElement("button");
    let removeButton: HTMLButtonElement = document.createElement("button");

    markAsDoneButton.innerHTML = "Markera som klar";
    markAsDoneButton.addEventListener("click", () => {
      todos[i].done = !todos[i].done;
      createHtml();
    });

    removeButton.innerHTML = "Ta bort";
    removeButton.className = "remove";
    removeButton.addEventListener("click", () => {
      todos.splice(i, 1);
      createHtml();
    });

    span.innerHTML = todos[i].item;

    if (todos[i].done) {
      span.className = "done";
      markAsDoneButton.innerHTML = "Markera som oklar";
    }

    li.appendChild(span);
    li.appendChild(markAsDoneButton);
    li.appendChild(removeButton);

    todolist.appendChild(li);
  }
}
