// metodos de recuperação de elementos do HTMl

const todoForm = document.getElementById('todo-form')
const todos = []


todoForm.addEventListener('submit', function (evento) {
    evento.preventDefault()
    evento.stopPropagation()
    const todoInput = document.querySelector('#todo')
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()
    // console.log(todos)
}) 

function renderizarTodos (){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''

    for (let tarefa of todos){
        // createElement é o metodo responsavel por criar novos elementos html dentro do jas a partir do nome das tags
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')
        
        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')
        
        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        // innerText é a propiedade que informa qual o conteudo de texto que esta dentro de um elemento HTML
        pTodoText.innerText = tarefa
        
        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        
        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'
        // appendChild serve para colocar um novo elemento Html dentro dos outros
        btnDelete.appendChild(spanIcon)
        // append serve para colocar novos elementos(um ou mais) Html dentro dos outros
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
        console.log(tarefa)
        console.log(divCard)
    }
    
}
