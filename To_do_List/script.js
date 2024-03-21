const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const errorMessage = document.getElementById('error');

const addTask = () => {
    if (inputBox.value === '') {
        errorMessage.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';

    let el = document.createElement('li');
    el.innerHTML = inputBox.value;
    listContainer.appendChild(el);

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    el.appendChild(span);

    inputBox.value = '';
    saveData();
};

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


const saveData = () => {
    sessionStorage.setItem('todo', listContainer.innerHTML)
};

const showTasks = () => {
    listContainer.innerHTML = sessionStorage.getItem('todo');
};

showTasks();