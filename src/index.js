import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';

import showMeals from './modules/render-meals';
import getMealData from './modules/get-meals';

console.log(getMealData([0]));


showMeals();
