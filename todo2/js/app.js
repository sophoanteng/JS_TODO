 const dateElement =  document.querySelector('#date');
const dayAndMonth = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
};
dateElement.innerHTML =new Date().toLocaleString('en-Us', dayAndMonth);