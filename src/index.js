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
  const userId = document.getElementById('user_id');
  const userName = document.getElementById('username');
  const userMsg = document.getElementById('msg');
  CreateComment(userId, userName, userMsg);
}

const form = document.getElementById('commentForm');
form.addEventListener('submit', logSubmit);

// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1HOyfG1TSei7hYcDnLzZ/comments?item_id=52937