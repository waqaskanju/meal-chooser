import { api, app_ID } from './base-api.js';

export const getLikes = async () => {
  const getData = await fetch(`${api}/apps/${app_ID}/likes`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (getData.status !== 400) {
    const results = await getData.json();
    results.map((item) => {
      console.log(item);
      if (item.item_id != null) {
        console.log(item.item_id);
        console.log(item.likes);
        document.getElementById(`likes${item.item_id}`).innerHTML = `${item.likes} Likes`;
      }
      return true;
    });
  }
};

// export const setLikes = async () => {
//   // const sendInfo = {
//   //   item_id: item,
//   // };

//   await fetch(`${api}/apps/${app_ID}/likes?item_id=52950`, {
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
