import { baseURL } from './involment_baseurl.js';

const createNewInvolment = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const involmentId = await response.json();
  return involmentId;
};

export default createNewInvolment;