import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputSearch from '../../components/InputSearch';
import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';

import ItemLink from '../../components/ItemLink';

export function Movies() {
  const { state, setQuerySearch } = useRequestAPI(); // eslint-disable-line
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line
  const querySearch = searchParams.get('query') ?? '';

  const chengeValue = value => {
    setQuery(value);
  };

  useEffect(() => {
    if (querySearch === '') {
      return;
    }
    console.log(query);
    setQuery(querySearch);
    setQuerySearch(querySearch);
  }, []); // eslint-disable-line

  const submitQuery = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query: query } : {});

    setQuerySearch(query);
  };

  return (
    <>
      <InputSearch
        onChenge={chengeValue}
        value={query}
        submit={submitQuery}
      ></InputSearch>

      {state ? (
        <ul>
          {state.results.map(({ original_title, id }) => (
            <ItemLink key={id} title={original_title} id={id} />
          ))}
        </ul>
      ) : (
        <p>'Enter movie name'</p>
      )}
    </>
  );
}

export default Movies;
