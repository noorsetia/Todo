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

    // -------------------- Important Dates Section --------------------
    const dateTitle = document.createElement("h4");
    dateTitle.innerText = "📅 Important Dates";
    dateTitle.className = "text-center mt-4 text-danger";

    // Date input group
    const dateGroup = document.createElement("div");
    dateGroup.className = "input-group mb-3";

    const dateInput = document.createElement("input");
    dateInput.className = "form-control";
    dateInput.type = "date";
    dateInput.style.fontSize = "1rem";

    const dateTaskInput = document.createElement("input");
    dateTaskInput.className = "form-control";
    dateTaskInput.type = "text";
    dateTaskInput.placeholder = "Event or task";
    dateTaskInput.style.fontSize = "1rem";

    const addDateBtn = document.createElement("button");
    addDateBtn.className = "btn btn-info";
    addDateBtn.innerText = "Add Date";

    dateGroup.appendChild(dateInput);
    dateGroup.appendChild(dateTaskInput);
    dateGroup.appendChild(addDateBtn);

    // Container to show the list of important dates
    const dateList = document.createElement("div");
    dateList.className = "todo-list";

    // Add date event
    addDateBtn.addEventListener("click", addDate);

    function addDate() {
      const dateValue = dateInput.value;
      const taskText = dateTaskInput.value.trim();

      if (dateValue === "" || taskText === "") {
        return alert("Please fill both the date and task!");
      }

      const dateItem = document.createElement("div");
      dateItem.className = "todo-item";

      const dateText = document.createElement("span");
      dateText.innerText = `${dateValue} - ${taskText}`;

      const editDateBtn = document.createElement("button");
      editDateBtn.className = "btn btn-outline-warning btn-sm";
      editDateBtn.innerText = "Edit";

      const deleteDateBtn = document.createElement("button");
      deleteDateBtn.className = "btn btn-outline-danger btn-sm";
      deleteDateBtn.innerText = "Delete";

      // Edit button functionality
      editDateBtn.addEventListener("click", () => {
        const newDate = prompt("Edit date:", dateValue);
        const newTask = prompt("Edit task:", taskText);

        if (newDate && newTask && newDate.trim() !== "" && newTask.trim() !== "") {
        dateText.innerText = `${newDate} - ${newTask}`;
        } 
      });

      // Delete button functionality
      deleteDateBtn.addEventListener("click", () => {
      dateList.removeChild(dateItem);
      });

      dateItem.appendChild(dateText);
      dateItem.appendChild(editDateBtn);
      dateItem.appendChild(deleteDateBtn);

      dateList.appendChild(dateItem);

      dateInput.value = "";
      dateTaskInput.value = "";
  }

    // Append to page
    container.appendChild(title);
    container.appendChild(inputGroup);
    container.appendChild(listContainer);
    container.appendChild(dateTitle);
    container.appendChild(dateGroup);
    container.appendChild(dateList);
    root.appendChild(container);
