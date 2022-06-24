import getMealData from './modules/get-meals.js';

/* Here we are moking the data. comming from the server api reqeust. */

function countNumberOfItems(arr) {
  return arr.length;
}

const arr = [
  {
    idMeal: '53033',
    strMeal: 'Japanese gohan rice',
    strDrinkAlternate: null,
    strCategory: 'Side',
    strArea: 'Japanese',
    strInstructions:
          'STEP 1\r\nRinsing and soaking your rice is key to achieving the perfect texture. Measure the rice into a bowl, cover with cold water, then use your fingers to massage the grains of rice \u2013 the water will become cloudy. Drain and rinse again with fresh water. Repeat five more times until the water stays clear.\r\n\r\nSTEP 2\r\nTip the rinsed rice into a saucepan with 400ml water, or 200ml dashi and 200ml water, bring to the boil, then turn down the heat to a low simmer, cover with a tight-fitting lid with a steam hole and cook for 15 mins. Remove from the heat and leave to sit for another 15 mins, then stir through the mirin. Remove the lid and give it a good stir. Serve with any or all of the optional toppings.',
    strMealThumb:
          'https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg',
    strTags: null,
    strYoutube: 'https://www.youtube.com/watch?v=rZO86_-MIp0',
    strIngredient1: 'Sushi Rice',
    strIngredient2: 'Mirin',
    strIngredient3: 'Pickle Juice',
    strMeasure1: '300g',
    strSource: 'https://www.bbcgoodfood.com/recipes/japanese-rice-gohan',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
  {
    idMeal: '52937',
    strMeal: 'Jerk chicken with rice & peas',
    strDrinkAlternate: null,
    strCategory: 'Chicken',
    strArea: 'Jamaican',
    strInstructions:
          'To make the jerk marinade, combine all the ingredients in a food processor along with 1 tsp salt, and blend to a pur\u00e9e. If you\u2019re having trouble getting it to blend, just keep turning off the blender, stirring the mixture, and trying again. Eventually it will start to blend up \u2013 don\u2019t be tempted to add water, as you want a thick paste.\r\n\r\nTaste the jerk mixture for seasoning \u2013 it should taste pretty salty, but not unpleasantly, puckering salty. You can now throw in more chillies if it\u2019s not spicy enough for you. If it tastes too salty and sour, try adding in a bit more brown sugar until the mixture tastes well balanced.\r\n\r\nMake a few slashes in the chicken thighs and pour the marinade over the meat, rubbing it into all the crevices. Cover and leave to marinate overnight in the fridge.\r\n\r\nIf you want to barbecue your chicken, get the coals burning 1 hr or so before you\u2019re ready to cook. Authentic jerked meats are not exactly grilled as we think of grilling, but sort of smoke-grilled. To get a more authentic jerk experience, add some wood chips to your barbecue, and cook your chicken over slow, indirect heat for 30 mins. To cook in the oven, heat to 180C/160C fan/gas 4. Put the chicken pieces in a roasting tin with the lime halves and cook for 45 mins until tender and cooked through.\r\n\r\nWhile the chicken is cooking, prepare the rice & peas. Rinse the rice in plenty of cold water, then tip it into a large saucepan with all the remaining ingredients except the kidney beans. Season with salt, add 300ml cold water and set over a high heat. Once the rice begins to boil, turn it down to a medium heat, cover and cook for 10 mins.\r\n\r\nAdd the beans to the rice, then cover with a lid. Leave off the heat for 5 mins until all the liquid is absorbed. Squeeze the roasted lime over the chicken and serve with the rice & peas, and some hot sauce if you like it really spicy.',
    strMealThumb:
          'https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg',
    strTags: 'Chilli,Curry',
    strYoutube: 'https://www.youtube.com/watch?v=qfchrS2D_v4',
    strIngredient1: 'Chicken Thighs',
    strIngredient2: 'Lime',
    strIngredient3: 'Spring Onions',
    strSource:
          'https://www.bbcgoodfood.com/recipes/2369635/jerk-chicken-with-rice-and-peas',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
];
test('check the value if it is 2', () => {
  expect(countNumberOfItems(arr)).toBe(2);
});

const a = 1;
const b = 2;
if (a > b) {
  getMealData();
}
