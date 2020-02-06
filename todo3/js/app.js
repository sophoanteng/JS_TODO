 const dateElement =  document.querySelector('#date');
const dayAndMonth = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
};
dateElement.innerHTML =new Date().toLocaleString('en-Us', dayAndMonth);



const inputItem = document.querySelector('#input');
document.addEventListener('keydown', event => {
    if(event.key === "Enter"){
       const toDo = inputItem.value;
       console.log(toDo);
       inputItem.value = "";
       
    }
});