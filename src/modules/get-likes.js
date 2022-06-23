import { api, appId } from './base-api.js';

const getLikes = async (mealId) => {
  const getData = await fetch(`${api}/apps/${appId}/likes`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (getData.status !== 400) {
    const results = await getData.json();
    const needle = mealId;
    for (let i = 0; i < results.length; i += 1) {
      if (results[i].item_id === needle) {
        return results[i].likes;
      }
    }
  }
  return false;
};

export default getLikes;

// export const setLikes = async () => {
//   // const sendInfo = {
//   //   item_id: item,
//   // };

//   await fetch(`${api}/apps/${appId}/likes?item_id=52950`, {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: '52950',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });

//   setTimeout(getLikes(), 500);
// };
