const getMealData = async () => {
  const mealIdUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  let ID = 52771;
    const getData = await fetch(`${mealIdUrl}${ID}`);
    const recivedScores = getData.json();
    ID++;
    return recivedScores;
};

export default getMealData;
