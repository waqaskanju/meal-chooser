import { api, app_ID } from './base-api.js';

const getLikes = async () => {
  const getData = await fetch(`${api}/apps/${app_ID}/likes/`);
  const receivedLikes = getData.json();
  console.log(receivedLikes);
  return receivedLikes;
};

export default getLikes;

