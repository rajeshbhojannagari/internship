const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
  const text = input.value.trim();
  if (text === "") return;
  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${text}</span>
    <button onclick="deleteTask(this)">X</button>
  `;
  taskList.appendChild(li);
  input.value = "";
}
function toggleDone(span) {
  span.parentElement.classList.toggle("done");
}
function deleteTask(button) {
  button.parentElement.remove();
}
