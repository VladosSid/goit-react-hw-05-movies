import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react'; // eslint-disable-line
import InputSearch from '../../components/InputMoviesSearch';
import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';

export function Movies() {
  const { resoult, RequestSearch } = useRequestAPI(); // eslint-disable-line

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';

  const chengeValue = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const submitQuery = e => {
    e.preventDefault();
    RequestSearch(querySearch);
  };

  // console.log(resoult);

  return (
    <>
      <InputSearch
        onChenge={chengeValue}
        value={querySearch}
        submit={submitQuery}
      ></InputSearch>

      <Outlet />
    </>
  );
}

export default Movies;
