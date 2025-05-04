const root = document.getElementById("root");

    // Header Section
    const container = document.createElement("div");
    container.className = "card shadow-lg p-4";

    const title = document.createElement("h2");
    title.innerText = "📝 Super To-Do List";
    title.className = "text-center mb-4 text-primary";

    // Input Section
    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group mb-3";

    const input = document.createElement("input");
    input.className = "form-control";
    input.type = "text";
    input.placeholder = "Enter your task";
    input.style.fontSize = "2rem";

    const addBtn = document.createElement("button");
    addBtn.className = "btn btn-success";
    addBtn.innerText = "Add";

    inputGroup.appendChild(input);
    inputGroup.appendChild(addBtn);

    const listContainer = document.createElement("div");
    listContainer.className = "todo-list";

    // Add task
    addBtn.addEventListener("click", addTask);
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") addTask();
    });

    function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return alert("Please enter a task!");

      const item = document.createElement("div");
      item.className = "todo-item";

      const span = document.createElement("span");
      span.innerText = taskText;

      const doneBtn = document.createElement("button");
      doneBtn.className = "btn btn-outline-primary btn-sm";
      doneBtn.innerText = "Done";

      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-outline-warning btn-sm";
      editBtn.innerText = "Edit";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-outline-danger btn-sm";
      deleteBtn.innerText = "Delete";

      doneBtn.addEventListener("click", () => {
        item.classList.toggle("done");
      });

      editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task:", span.innerText);
        if (newText !== null && newText.trim() !== "") {
          span.innerText = newText.trim();
        }
      });

      deleteBtn.addEventListener("click", () => {
        listContainer.removeChild(item);
      });

      item.appendChild(span);
      item.appendChild(doneBtn);
      item.appendChild(editBtn);
      item.appendChild(deleteBtn);

      listContainer.appendChild(item);
      input.value = "";
    }

    // Append to page
    container.appendChild(title);
    container.appendChild(inputGroup);
    container.appendChild(listContainer);
    root.appendChild(container);