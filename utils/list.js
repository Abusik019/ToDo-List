function createListElement(inputTodo, todoList, inputBody, table) {
    if (inputTodo.value) {
        const li = document.createElement('li');
        li.className = 'todoList_item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'li_checkbox';

        const h1 = document.createElement('h1');
        h1.textContent = inputTodo.value;
        h1.classList.add('todo-title')

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'delete_todo');
        deleteButton.setAttribute('class', 'delete_todo');

        const imageDelete = document.createElement('img');
        imageDelete.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO2VvW0CQRBGV4I2DI3gCmwgugSS20WytPMNRCBBdBlUYCrAFdgVmArsCuwOCEFIgBZyxMzwE8AnbbYzT+9uR+PcIycmJ2oGoOGunUBYecLyMs2BRmoewFvJSTWd2K0rgDyXwo6c+W3AhG+x+X3FgxfWz5x6iMGB+PcM4B+FMb7sD4s/5cbgqd0Y72JwDozMYOKh3Ji6bSu4A7TkxszPdmOqicFvvV7FCs5jfBKDsywrecJab4t1URRlp4kn/Btm+M9pEyzLwrIcPPGHYYZnBmNMDDM81oMjk2GUohrsgVf1P478ojcmqgbwRgHepFo1OCUQDyS7+XAX/X3xI3edHX3Y7so2CZcfAAAAAElFTkSuQmCC')

        deleteButton.appendChild(imageDelete);

        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(h1);
        li.appendChild(deleteButton);
        todoList.appendChild(li)
        inputTodo.value = '';
        inputBody.style.border = 'none';
    }else{
        inputBody.style.border = '1px solid red';
    }
}


export { createListElement };