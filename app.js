// get the form element and the ul element by accessing their classes
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//add todos 

// creates a html template which also includes the value (todo) being inputted by the user
const generateTemplate= todo => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  // get the ul with a class of todos and add the html to it
  list.innerHTML += html;

};
// listen for the submit event
addForm.addEventListener('submit', e => {
  // prevent page refresh on submit
  e.preventDefault();
  // store the inputted value, trim any whitespace
  const todo = addForm.add.value.trim();

  // call the function which adds the html template to the page, there must be at least one character inputted to fire, and the text in the form is cleared on submit
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
   
});

// delete todos
// use event delegation
// if the clicked on element within the form has a class of delete, then delete the parent element of that element
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});
