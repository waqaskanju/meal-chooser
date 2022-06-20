import _ from "lodash";
import "./style.css";

const toDoTasks = [];

class addTo_toDoList{
  index = 1;
  constructor(description, completed=false){
    this.description = description;
    this.completed = completed;
    this.index = this.index++;
  }
  addToList(){
    return toDoListItemMarkup(this.description, this.completed, this.index);
  }
}

const toDoListItemMarkup = (description, completed=false, index) => {
  const li = document.createElement("li");
  const listItem = `
  <li>
  <input type="checkbox" name="${completed}" id="check${index}">
  <p id="description${index}">
  ${description}
  </p>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>
  `;
  li.innerHTML = listItem;
  return li;
};

const list = document.querySelector("#to-do-list");

function mySubmitFunction(event) {
  event.preventDefault();
  
}

const form = document.getElementById('input-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formValue = document.querySelector("#add-item").value;
  const task = new addTo_toDoList(formValue, false);
  list.appendChild(task.addToList());
  document.querySelector("#add-item").value = "";

  //  toDoTasks.forEach((task) => { list.appendChild(toDoListItemMarkup(task.description, task.completed, task.index)) }); */
});

/* const inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", mySubmitFunction); */
