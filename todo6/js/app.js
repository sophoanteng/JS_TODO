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
document.addEventListener('keydown', event => {
    if(event.key === "Enter"){
       const toDo = inputItem.value;
       if(toDo){
        insertFunction(toDo, true);
     }
    inputItem.value = "";
    }
});

function insertFunction(todo, isDone){
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