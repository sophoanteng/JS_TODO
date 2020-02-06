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

document.addEventListener('keydown', event => {
    if(event.key === "Enter"){
       const toDo = inputItem.value;
       if(toDo){
        insertFunction(toDo);
     }
    inputItem.value = "";
    }
});

function insertFunction(toDo){
    const result =`
    <li class="item">
      <p class="text">${toDo}</p>
    </li>
 `;
listItem.insertAdjacentHTML('beforeend', result);
}