const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists=[]

newListForm.addEventListener('submit', e=>{
    e.preventDefault()
    const listName = newListInput.value
    if(!listName) return
    newListInput.value = null
    lists.push(listName)
    render()
})


function render(){
    const div_task = document.createElement('div')
    div_task.className = "div_to_do_task"
    div_task.style.display = "flex"
    div_task.style.alignItems = "center"
    listContainer.appendChild(div_task)

    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    checkBox.value = false
    checkBox.className = "check-box"
    div_task.appendChild(checkBox) 
    
    lastPos = lists.length -1
    list = lists[lastPos]
    const item = document.createElement('li')
    item.classList.add('item')
    item.innerText = list
    item.style.color = "#474646"
    div_task.appendChild(item) 
}
