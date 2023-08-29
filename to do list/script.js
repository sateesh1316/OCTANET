const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="completeButton">Complete</button>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("completeButton")) {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
  } else if (event.target.classList.contains("deleteButton")) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
  }
});
