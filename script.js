import { createListElement } from "./utils/list.js";
import { addToTable } from "./utils/addToTable.js";

const addTodo = document.getElementById('add_todo'),
    inputTodo = document.getElementById('input_todo'),
    todoList = document.getElementById('todo_list'),
    inputBody = document.getElementById('input_body'),
    tableBtn = document.getElementById('table_btn'),
    tableCloseBtn = document.getElementById('close_btn'),
    tableContainer = document.getElementById('table_container'),
    table = document.getElementById('table');

addTodo.addEventListener('click', () => {
    createListElement(inputTodo, todoList, inputBody, table);
})

inputTodo.addEventListener('blur', () => {
    createListElement(inputTodo, todoList, inputBody, table);
})

inputTodo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createListElement(inputTodo, todoList, inputBody, table);
    } else {
        inputBody.style.border = 'none';
    }
})

tableBtn.addEventListener('click', () => {
    const list_checks = Array.from(document.querySelectorAll('.li_checkbox')).map(el => el.checked),
        list_titles = Array.from(document.querySelectorAll('.todo-title')).map(el => el.innerText)

    if (list_checks.length !== list_titles.length) {
        throw new Error('Invalid data!')
    }

    if (list_checks.length) {
        for (let i = 0; i < list_checks.length; i++) {
            addToTable(table, list_titles[i], list_checks[i])
        }
        tableContainer.classList.add('active');
    } else {
        alert('Add some task!')
    }
})

tableCloseBtn.addEventListener('click', () => {
    tableContainer.classList.remove('active');
    table.innerHTML = `
        <tr>
            <th>Описание</th>
            <th>Статус</th>
        </tr>
    `;
})
