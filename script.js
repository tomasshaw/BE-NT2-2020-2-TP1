const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let count = 0

const addCounter = () => {
	++count
	itemCountSpan.innerHTML = `${count}`
}

function addTodo() {
	const li = createListItem()
	list.appendChild(li)
	addCounter()
}

const createListItem = () => {
	const newLi = document.createElement('li')
	newLi.className = classNames.TODO_TEXT
	newLi.appendChild(createListItemCheckbox())
	newLi.appendChild(createListItemText())
	return newLi
}

const createListItemCheckbox = () => {
	const newCheckbox = document.createElement('input')
	newCheckbox.setAttribute('type', 'checkbox')
	return newCheckbox
}

const createListItemText = () => {
	return document.createTextNode('Nuevo item en la lista')
}
