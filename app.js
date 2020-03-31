// get the form element with a class of add
const addForm = document.querySelector('.add');
// get the ul element
const list = document.querySelector('.todos');
// get the input element of the form with a class of search
const search = document.querySelector('.search input');

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
// create a function to do something with the  search input from a user
const filterTodos = (term) => {
 // get an array from the html collection of li's inside the ul
 Array.from(list.children)
  // filter each li (eachChild) by checking if its text content doesn't include the inputted characters from the user, if it doesn't; add the 'filtered' class
  .filter((eachChild) => !eachChild.textContent.toLowerCase.includes(term))
  .forEach((eachChild) => eachChild.classList.add('filtered'));

 Array.from(list.children)
 // filter each li (eachChild) by checking if its text content does include the inputted characters from the user, if it does; remove the 'filtered' class
  .filter((eachChild) => eachChild.textContent.toLowerCase.includes(term))
  .forEach((eachChild) => eachChild.classList.remove('filtered'));
};

// search todos using keyup event
search.addEventListener('keyup', () => {
 // get and store the inputted character(s) from the user, remove whitespace & convert to lowercase
 const term = search.value.trim().toLowerCase;
 // call the function
 filterTodos(term);
});