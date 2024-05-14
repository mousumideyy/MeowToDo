// Function to add a new task
// Function to add a new task
function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ name: task, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        input.value = '';
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        
        // Add a button to mark task as completed and remove from display
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => {
            tasks.splice(index, 1); // Remove task from array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
            displayTasks(); // Refresh task list display
        };
        
        li.appendChild(completeButton); // Append button to task item
        taskList.appendChild(li); // Append task item to task list
    });
}

// Initial display of tasks
displayTasks();
