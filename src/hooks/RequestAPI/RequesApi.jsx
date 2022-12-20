import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../components/utils';

axios.defaults.baseURL = `${BASE_URL}`;

export function RequestApi(search = null, id = null) {
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

  useEffect(() => {
    if (id === null) {
      return;
    }

    async function apiData() {
      try {
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

        setState(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    apiData();
  }, [id]);

  return [state, setState];
}

export default RequestApi;
