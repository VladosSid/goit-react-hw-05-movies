import { useState, useEffect } from 'react';

import axios from 'axios';
import { BASE_URL, API_KEY } from '../../components/utils';

axios.defaults.baseURL = `${BASE_URL}`;

export const useRequestAPI = () => {
  const [resoult, setState] = useState(null);

  function RequestSearch(query) {
    useEffect(() => {
      if (query === '') {
        return;
      }

      async function apiData() {
        try {
          const response = await axios.get(
            `/search/movie?api_key=${API_KEY}&query=${query}`
          );
          setState(response.data);
        } catch (error) {
          console.log(error.message);
        }
      }
      apiData();
    }, [query]);
  }

  return { resoult, RequestSearch };
};

export default useRequestAPI;
