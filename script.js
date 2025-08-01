document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const delAll = document.getElementById("delAll");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  // Control to-do list with keyboard...
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    } else if (e.ctrlKey && e.key === "Backspace") {
      e.preventDefault();
      delAll.click();
    } else if (e.key === "Delete") {
      (() => {
        let lastChild = todoList.lastElementChild;
        tasks.pop();
        todoList.removeChild(lastChild);
        saveTask();
      })();
    } else {
      todoInput.focus();
    }
  });

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    todoInput.value = ""; // clear input
    renderTasks(newTask);
    todoInput.focus();
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button> 
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      }
      // task.completed = !task.completed
      // task.completed = task.completed ^ 1;
      task.completed ^= 1;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("li button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
      todoInput.focus();
    });

    todoList.appendChild(li);
  }

  delAll.addEventListener("click", () => {
    while (todoList.firstElementChild) {
      const child = todoList.firstElementChild;
      tasks = [];
      todoList.removeChild(child);
      saveTask();
    }
  });

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
