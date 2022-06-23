import { api, app_ID } from './base-api.js';

export const getLikes = async (mealId) => {
  const getData = await fetch(`${api}/apps/${app_ID}/likes`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (getData.status !== 400) {
    const results = await getData.json();
    let needle = mealId;
    let myLikes = 0;
    for (let i = 0; i < results.length; i++) {

      if (results[i].item_id === needle) {
        myLikes = results[i].likes;
      }

    }

    // results.map((item) => {
    //   console.log(item);
    //   if (item.item_id != null) {
    //     console.log(item.item_id);
    //     console.log(item.likes);
    //     // document.getElementById(`likes${item.item_id}`).innerHTML = `${item.likes} Likes`;
    //   }
    //   return true;
    // });
  }
  console.log(myLikes)
  return myLikes;
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
