import { useState, useEffect } from 'react';

import axios from 'axios';
import { BASE_URL, API_KEY } from '../../components/utils';

axios.defaults.baseURL = `${BASE_URL}`;

export const useRequestAPI = () => {
  const [state, setState] = useState(null);
  const [stateCast, setStateCast] = useState(null);

  const [homePopularity, setHomePopularity] = useState(false);
  const [querySearch, setQuerySearch] = useState('');
  const [moviesId, setMoviesId] = useState(null);
  const [moviesCastReviews, setMoviesCastReviews] = useState(null);

  // HomePage request
  useEffect(() => {
    if (homePopularity === false) {
      return;
    }

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
  }, [homePopularity]);

  // Movies request(search)
  useEffect(() => {
    if (querySearch === '') {
      return;
    }

    async function apiData() {
      try {
        const response = await axios.get(
          `/search/movie?api_key=${API_KEY}&query=${querySearch}`
        );
        setState(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    apiData();
  }, [querySearch]);

  // Movies request ditails
  useEffect(() => {
    if (moviesId === null) {
      return;
    }

    async function apiData() {
      try {
        const response = await axios.get(
          `/movie/${moviesId}?api_key=${API_KEY}`
        );

        setState(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    apiData();
  }, [moviesId]);

  // request Cast and Reviews
  useEffect(() => {
    if (moviesCastReviews === null) {
      return;
    }

    async function apiData() {
      try {
        const response = await axios.get(
          `/movie/${moviesCastReviews.id}/${moviesCastReviews.type}?api_key=${API_KEY}`
        );
        // console.log(response.data.cast);
        setStateCast(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    apiData();
  }, [moviesCastReviews]);

  return {
    state,
    stateCast,
    setHomePopularity,
    setQuerySearch,
    setMoviesId,
    setMoviesCastReviews,
  };
};

export default useRequestAPI;
