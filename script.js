const body = document.querySelector('body');
const addTodo = document.querySelector('#add');
const inputElement = document.getElementById('inputElement');
const todoContainer = document.getElementById('todoContainer');

addTodo.addEventListener('click', function(){
    const inputVal = inputElement.value;
    inputElement.value = "";


    const todoItem = document.createElement('div');
    const h3 = document.createElement('h3');
    const deleteButton = document.createElement('button');
   
    h3.innerHTML = inputVal;
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener('click', () => {
        todoContainer.removeChild(todoItem)
    });

    todoItem.appendChild(h3);
    todoItem.appendChild(deleteButton);
    todoContainer.appendChild(todoItem);
 

});




