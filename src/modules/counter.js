import { setLikes } from "./get-likes.js";

const counterMeals = (id) => {
  let counter = 0;

  for (let i = 0; i < id.lenght; i = i + 1){
    counter = counter + 1;
  }
  document.querySelector('#list').textContent = `${counter}`;
}

export default counterMeals;