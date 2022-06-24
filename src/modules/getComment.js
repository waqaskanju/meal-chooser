import { api, appId } from './base-api.js';

const getComment = async (mealId) => {
  const getData = await fetch(`${api}/apps/${appId}/comments?item_id=${mealId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let results = '';
  if (getData.status !== 400) {
    results = await getData.json();
  }
  return results;
  // console.log(results);
};

export default getComment;