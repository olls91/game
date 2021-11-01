const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const taskNum = document.querySelector('.num span');
const ul = document.querySelector('ul');
const li = document.getElementsByClassName('task');

const removeTask=(e)=>{
e.target.parentNode.remove();
taskNum.textContent = li.length;
}

function addTask(e) {
    e.preventDefault();
    const text = input.value.toLowerCase();
    console.log(text);
    if (text === "") return;
    const tasks = document.createElement('li');
    tasks.className="task";
    tasks.innerHTML = text + "<button> Delete </button>";
    ul.appendChild(tasks);
    input.value = "";

    taskNum.textContent = li.length;
    console.log(li.length);
tasks.querySelector('button').addEventListener('click',removeTask)
}

// ustawiam nasłuchiwanie na formularz

form.addEventListener('click', addTask)