import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../components/utils';

axios.defaults.baseURL = `${BASE_URL}`;

export function RequestCast(type, id = null) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (id === null) {
      return;
    }

    async function apiData() {
      try {
        const response = await axios.get(
          `/movie/${id}/${type}?api_key=${API_KEY}`
        );

        setState(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    apiData();
  }, [id, type]);

  return [state, setState];
}
export default RequestCast;
