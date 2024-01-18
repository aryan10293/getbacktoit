const taskHolder = document.getElementById('task-holder')
const taskBtn = document.getElementById('task-btn')

taskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const task = document.getElementById('task')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = task.value
    task.value = ''
    taskHolder.appendChild(paragraph)
})