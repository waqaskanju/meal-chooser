const getMealData = async () => {
  const mealIdUrl = 'www.themealdb.com/api/json/v1/1/lookup.php?i=';
  let ID = 52770;
  for (let i = 0; i < 6; i++) {
    const getData = await fetch(`${mealIdUrl}${ID}`);
    const recivedScores = getData.json();
    return recivedScores;
  }
  ID++;
};

export default getMealData;
