// ელემენტების მოძებნა DOM-დან
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// დაჭერაზე დავალების დამატება
addBtn.addEventListener("click", addTask);

// Enter კლავიშით დამატებაც
taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
    });

    // ფუნქცია: დავალების დამატება
    function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("გთხოვ შეიყვანე დავალება!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    // Edit ღილაკი
    const editBtn = document.createElement("button");
    editBtn.textContent = "რედაქტირება";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
        const newTask = prompt("შეიყვანე ახალი ტექსტი:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
        }
    };

    // Delete ღილაკი
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "წაშლა";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

  taskInput.value = ""; // input გასუფთავება
}
