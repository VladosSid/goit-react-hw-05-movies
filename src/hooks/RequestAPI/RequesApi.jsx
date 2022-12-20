import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'd27eeed894e03e02a15bcd31471a58c6';

export function RequestApi(query) {
  const [state, setState] = useState(null);

  useEffect(() => {
    async function apiData() {
      try {
        const response = await axios.get(
          `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
        );
        setState(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    apiData();
  }, []);

  return [state, setState];
}

export default RequestApi;