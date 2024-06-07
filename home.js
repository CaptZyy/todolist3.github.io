document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const taskText = taskInput.value;
    const taskDate = dateInput.value;

    if (taskText.trim() !== '' && taskDate.trim() !== '') {
        const taskList = document.getElementById('taskList');

        const newTask = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = `${taskText} - ${taskDate}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'editButton';
        editButton.addEventListener('click', function() {
            taskContent.contentEditable = true;
            taskContent.focus();
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'completeButton';
        completeButton.addEventListener('click', function() {
            taskContent.style.textDecoration = 'line-through';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(taskContent);
        newTask.appendChild(editButton);
        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
        dateInput.value = '';
    }
});
