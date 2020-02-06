 const dateElement =  document.querySelector('#date');
const dayAndMonth = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
};
let time = new Date();
dateElement.innerHTML = time.toLocaleString('en-Us', dayAndMonth);

const inputItem = document.querySelector('#input');
const listItem = document.querySelector('#list');

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line = "lineThrough";
var storData = [];
var id = 0; 
var data = localStorage.getItem("todo");

if(data ){
     storData = JSON.parse(data);
     storData.forEach( item => {
       insertFunction(item.name, item.id, item.time, item.done, item.trash);
       console.log(item);
    });
}else {
    id = 0;
    storData = [];
}
document.addEventListener('keyup', event => {
    if(event.key === "Enter"){
       const toDo = inputItem.value;
       const timer = time.getMinutes() + ":" + time.getSeconds();
       if(toDo) {
        insertFunction(toDo, timer);
        storData.push({
            name:toDo,
            id: id,
            time: timer,
            done: false,
            trash: false
        });
        id++;
        localStorage.setItem("todo", JSON.stringify(storData));
    }
    clearInput(inputItem);
    }
});


function insertFunction(todo, timer, id, isDone, trash){
    const isCheck = isDone ? check : uncheck;
    const isLine = isDone ? line : "";
    if(trash) return;
    const result =`
    <li class="item">
       <i class="fa ${isCheck} co"  job="tisk"  id="${id}"></i>
       <p class="text ${isLine}">${todo} : ${timer}</p>
       <i class="fa fa-trash-o  de" job="delete" id="${id}"></i>
    </li>
 `;
listItem.insertAdjacentHTML('beforeend', result);
}

document.addEventListener('click', event =>{
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if(elementJob === "tisk"){
       
    }else if (elementJob === "delete"){
        listItem.removeChild(element.parentNode);
        storData[element.id].trash = true;
    }
    localStorage.setItem("todo", JSON.stringify(storData));
});

function clearInput() {
    inputItem.value = "";
}