const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const taskInput = document.getElementById('task-input')

let count = 0
let checkedCount = 0

const addCounter = () => {
	++count
	updateHTMLValues()
}

const updateHTMLValues = () => {
	uncheckedCountSpan.innerHTML = `${count-checkedCount}`
	itemCountSpan.innerHTML = `${count}`
}

function addTodo() {
	const li = createListItem(taskInput.value)
	list.appendChild(li)
	addCounter()
}

const createListItem = (textValue) => {
	const newLi = document.createElement('li')
	newLi.className = classNames.TODO_TEXT
	newLi.appendChild(createListItemCheckbox())
	newLi.appendChild(createListItemText(textValue))
	return newLi
}

const createListItemText = (textValue) => {
	const tag = document.createElement('label')
	tag.setAttribute('for', `${'item'+count}`)
	tag.appendChild(document.createTextNode(textValue))
	return tag
}

const createListItemCheckbox = () => {
	const newCheckbox = document.createElement('input')
	newCheckbox.setAttribute('type', 'checkbox')
	newCheckbox.setAttribute('id', `${'item'+count}`)
	newCheckbox.addEventListener('click', handleCheckboxToggle)
	return newCheckbox
}

const handleCheckboxToggle = ({target}) => {
	if(target.checked){
		++checkedCount
		target.parentNode.classList.add('checked-text')
	} else {
		--checkedCount
		target.parentNode.classList.remove('checked-text')
	}
	updateHTMLValues()
}
