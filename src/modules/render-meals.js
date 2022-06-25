import { getLikes } from './get-likes.js';
import getMealData from './get-meals.js';
import createCard from './card-element.js';
import counterMeals from './counter.js';
import getComment from './getComment.js';

const showMeals = () => {
  const cardData = getMealData();
  cardData.then((value) => {
    if (value.meals) {
      for (let i = 1; i <= 6; i += 1) {
        const image = value.meals[i].strMealThumb;
        const title = value.meals[i].strMeal;
        const id = value.meals[i].idMeal;
        const category = value.meals[i].strCategory;
        const tag = value.meals[i].strTags;
        const area = value.meals[i].strArea;
        const video = value.meals[i].strYoutube;
        const likesData = getLikes(id);
        const CommentData = getComment(id);
        counterMeals(id);
        CommentData.then((comments) => {
          // eslint-disable-next-line no-loop-func
          likesData.then((likeValue) => {
            if (likeValue === undefined) {
              likeValue = 0;
            }
            createCard(image, title, id, likeValue, category, tag, area, video, comments);
          });
        });
      }
    }
  });
/* end of card data then statment */
};

export default showMeals;
