import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';

import showMeals from './modules/render-meals.js';
import { getLikes } from './modules/get-likes.js';
import CreateComment from './modules/createComment.js';

showMeals();
getLikes();

function logSubmit(event) {
  event.preventDefault();
  const userId = document.getElementById('itemid').value;
  const userName = document.getElementById('username').value;
  const userMsg = document.getElementById('comment').value;
  const response = CreateComment(userId, userName, userMsg);
  response.then((answer) => {
    document.getElementById('newComment').innerHTML = `Comment ${answer}`;
    setTimeout(() => {
      document.getElementById('newComment').innerHTML = '';
    }, 3000);
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  });
}

const form = document.getElementById('commentForm');
form.addEventListener('submit', logSubmit);
