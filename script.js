const body = document.querySelector('body');
const addTodo = document.querySelector('#add');
const inputElement = document.getElementById('inputElement');
const todoContainer = document.getElementById('todoContainer');
const toggleButton = document.querySelector('#toggleTheme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

addTodo.addEventListener('click', function(){
    const inputVal = inputElement.value.trim();
    if (inputVal === '') return; // 
    
    inputElement.value = "";
    
    const todoItem = document.createElement('div');
    const h3 = document.createElement('h3');
    const buttonContainer = document.createElement('div');
    const deleteButton = document.createElement('button');
    const doneButton = document.createElement('button');
    
    buttonContainer.className = 'button-container';
    
    h3.innerHTML = inputVal;
    deleteButton.innerHTML = "Delete";
    doneButton.innerHTML = "Done";
    
    deleteButton.addEventListener('click', () => {
        todoContainer.removeChild(todoItem);
    });
    
    doneButton.addEventListener('click', () => {
        h3.style.textDecoration = h3.style.textDecoration === "line-through" ? "none" : "line-through";
    });
    
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(doneButton);
    

    todoItem.appendChild(h3);
    todoItem.appendChild(buttonContainer);
    todoContainer.appendChild(todoItem);
});

// Add todo on Enter key press
inputElement.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo.click();
    }
});

