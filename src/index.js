import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';

import showMeals from './modules/render-meals.js';
import getLikes from './modules/get-likes.js';

getLikes();
showMeals();
