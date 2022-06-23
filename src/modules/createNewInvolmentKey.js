import { baseUrl } from './baseUrl.js';

const createInvolmentKey = async () => {
  const response = await fetch(`${baseUrl}/apps/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const involmentKey = await response.json();
  return involmentKey;
};
export default createInvolmentKey;