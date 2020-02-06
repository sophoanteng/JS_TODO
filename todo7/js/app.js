 const dateElement =  document.querySelector('#date');
const dayAndMonth = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
};
dateElement.innerHTML =new Date().toLocaleString('en-Us', dayAndMonth);

const inputItem = document.querySelector('#input');
const listItem = document.querySelector('#list');

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line = "lineThrough";
var storData = [];
var id = 0; 
var data = localStorage.getItem("todo");
//convert string to JSON
var todoList = JSON.parse(data);
if(todoList){
    todoList.forEach( item => {
       insertFunction(item.name, item.id, item.done, item.trash);
    });
}
document.addEventListener('keyup', event => {
    if(event.key === "Enter"){
       const toDo = inputItem.value;
       if(toDo){
        insertFunction(toDo);
        storData.push({
            name:toDo,
            id: id,
            done: false,
            trash: false
        });
        id++;
        localStorage.setItem("todo", JSON.stringify(storData));
     }
    inputItem.value = "";
    }
});



function insertFunction(todo, id, isDone, trash){
    const isCheck = isDone ? check : uncheck;
    const isLine = isDone ? line : "";
    const result =`
    <li class="item">
       <i class="fa  ${isCheck} co"  job="tisk"></i>
       <p class="text ${isLine}">${todo}</p>
       <i class="fa fa-trash-o de" job="delete"></i>
    </li>
 `;
listItem.insertAdjacentHTML('beforeend', result);
}
