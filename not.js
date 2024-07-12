function ToDoItem(id, task, time) {
    this.id = id;
    this.task = task;
    this.time = time;
}
function getCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}
document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskText = document.getElementById('newTask').value;
    if (taskText === "") return;
    let taskList = document.getElementById('taskList');
    let taskId = taskList.children.length + 1;
    let taskTime = getCurrentTime();
    let newTask = new ToDoItem(taskId, taskText, taskTime);
    let taskElement = document.createElement('li');
    taskElement.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'bg-gray-100', 'rounded', 'my-2');
    taskElement.innerHTML = `<span class="text-gray-500 text-sm">${newTask.time}</span>
                             <span>${newTask.id}. ${newTask.task}</span>
                             <button class="text-red-500 hover:text-red-700">Delete</button>`;
    taskList.appendChild(taskElement);
    document.getElementById('newTask').value = "";
});
document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskText = document.getElementById('newTask').value;
    if (taskText === "") return;
    let taskList = document.getElementById('taskList');
    let taskId = taskList.children.length + 1;
    let taskTime = getCurrentTime();
    let newTask = new ToDoItem(taskId, taskText, taskTime);
    let taskElement = document.createElement('li');
    taskElement.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'bg-gray-100', 'rounded', 'my-2');
    taskElement.innerHTML = `<span class="text-gray-500 text-sm">${newTask.time}</span>
                             <span>${newTask.id}. ${newTask.task}</span>
                             <button class="text-red-500 hover:text-red-700 delete-button">Delete</button>`;
    taskList.appendChild(taskElement);
    document.getElementById('newTask').value = "";
    taskElement.querySelector('.delete-button').addEventListener('click', function() {
        taskList.removeChild(taskElement);
    });
});
