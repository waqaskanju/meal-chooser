import { api, appId } from './base-api.js';

const CreateComment = async (mealId, username, comment) => {
  const getComment = await fetch(`${api}/apps/${appId}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${mealId}`,
        username: `${username}`,
        comment: `${comment}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const messageAddComment = await getComment.text();
  return messageAddComment;
};
export default CreateComment;