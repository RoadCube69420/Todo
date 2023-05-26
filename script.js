const userName = document.querySelector('#name');
const todoTextField = document.querySelector('#content');
let todoName = todoTextField.value;
const form = document.querySelector('form')
const businessBtn = document.querySelector('#category1');
const personalBtn = document.querySelector('#category2');
const todoSubmit = document.querySelector('.submit-btn');
let todoType = '';
let dataValue = 0;
const todoList = document.querySelector('div#todo-list');
console.log(todoTextField);
todoTextField.addEventListener('change', (e) => {
    e.preventDefault()
})
const createTodoItem = (Name, Type) => {
    // const element = document.createElement('div');
    // element.innerHTML = `
    //     <h2>${Name}</h2>
        
    //     <button>
    //         Delete
    //     </button>
    // `;
    const html = `
    <div class="todo-item ${Type}" data-value="${dataValue}">
        <label>
            <input type="checkbox">
        </label>
        <span class="bubble ${Type}"></span>
        <div class="todo-content">
            <h2 data-value="${dataValue}">${Name}</h2>
        </div>
        <div class="actions">
            <button class="edit visible" onclick="edit(${dataValue})">Edit</button>
            <button class="done hidden" onclick="done(${dataValue})">Done</button>
            <button class="delete visible" onclick="selfRemove(${dataValue})">Delete</button>
        </div>
    </div>
    ` ;
    // element.setAttribute('class', 'todo-item ')
    todoList.insertAdjacentHTML('afterbegin', html);
    dataValue++;
    // console.log(element)
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
});
todoSubmit.addEventListener('click', (e) => {
    todoName = todoTextField.value;
    if (todoName !== '' && todoType !== '') {
    createTodoItem(todoName, todoType)
    }
    else {
        alert('Either Todo Name or Type is not specified')
    }
})
businessBtn.addEventListener('click', (e) => {
    todoType = 'business';
    console.log(todoType)
})
personalBtn.addEventListener('click', (e) => {
    todoType = 'personal';
    console.log(todoType)
})
const selfRemove = (datavalue) => {
    document.querySelector(`[data-value="${datavalue}"]`).remove();
};
const edit = (datavalue) => {
    const text = document.querySelector(`h2[data-value="${datavalue}"]`);
    const newElement = document.createElement('input');
    const editBtn = document.querySelector(`.edit`);
    const doneBtn = document.querySelector(`.done`);
    newElement.setAttribute('data-value', text.getAttribute('data-value'));
    newElement.value = text.innerText;
    text.parentNode.replaceChild(newElement, text);
    editBtn.classList.add('hidden');
    editBtn.classList.remove('visible');
    doneBtn.classList.add('visible');
    doneBtn.classList.remove('hidden');
}
const done = (datavalue) => {
    const text = document.querySelector(`input[data-value="${datavalue}"]`);
    const newElement = document.createElement('h2');
    const editBtn = document.querySelector(`.edit`);
    const doneBtn = document.querySelector(`.done`);
    newElement.setAttribute('data-value', text.getAttribute('data-value'));
    newElement.innerText = text.value;
    text.parentNode.replaceChild(newElement, text);
    doneBtn.classList.add('hidden');
    doneBtn.classList.remove('visible');
    editBtn.classList.add('visible');
    editBtn.classList.remove('hidden');
}
document.querySelector('.done').addEventListener('change', function(e) {
    done(e.target.getAttribute('data-value'))
})