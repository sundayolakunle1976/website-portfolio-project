document.addEventListener("DOMContentLoaded", () => {
    // Select the required HTML elements
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const taskCount = document.getElementById("task-count");
    const emptyState = document.getElementById("empty-state");
    const clearCompleted = document.getElementById("clear-completed");

    // Initialise an empty array to store tasks
    let tasks = [];

    // Function to display and update the task list
    function render() {
        taskList.innerHTML = "";

        // Loop through all tasks and create their HTML elements
        tasks.forEach((task) => {
            const listItem = document.createElement("li");

            listItem.className = "task-item" + (task.completed ? " done" : "");

            // Create the task completion checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.setAttribute("aria-label", "Mark task completed");

            // Update task status when checkbox is selected
            checkbox.addEventListener("change", () => {
                task.completed = checkbox.checked;
                render();
            });

            // Create the task title
            const taskTitle = document.createElement("span");
            taskTitle.textContent = task.title;

            // Create the delete button
            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete";

            // Delete the selected task
            deleteButton.addEventListener("click", () => {
                tasks = tasks.filter((item) => item.id !== task.id);
                render();
            });

            // Add the checkbox, title and delete button to the list item
            listItem.append(checkbox, taskTitle, deleteButton);

            // Add the list item to the task list
            taskList.append(listItem);
        });

        // Calculate the number of completed tasks
        const completedTasks = tasks.filter((task) => task.completed).length;

        // Display total tasks and completed tasks
        taskCount.textContent = `${tasks.length} tasks • ${completedTasks} completed`;

        // Show the empty state when there are no tasks
        emptyState.hidden = tasks.length > 0;
    }

    // Handle task form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the task entered by the user
        const title = taskInput.value.trim();

        // Prevent empty tasks from being added
        if (!title) {
            return;
        }

        // Add the new task to the tasks array
        tasks.push({
            id: Date.now() + Math.random(),
            title: title,
            completed: false
        });

        // Clear the input field and refresh the task list
        taskInput.value = "";
        render();

        // Return focus to the task input field
        taskInput.focus();
    });

    // Remove all completed tasks when the clear button is clicked
    clearCompleted.addEventListener("click", () => {
        tasks = tasks.filter((task) => !task.completed);
        render();
    });

    // Display the initial task list
    render();
});