import { useSearchParams } from 'react-router-dom';
import InputSearch from '../../components/InputMoviesSearch';
import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';

import ItemLink from '../../components/ListFilmLink';

export function Movies() {
  const { state, setQuerySearch } = useRequestAPI(); // eslint-disable-line

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';

  const chengeValue = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const submitQuery = e => {
    e.preventDefault();
    setQuerySearch(querySearch);
  };

  return (
    <>
      <InputSearch
        onChenge={chengeValue}
        value={querySearch}
        submit={submitQuery}
      ></InputSearch>

      <ul>
        {state
          ? state.results.map(({ original_title, id }) => (
              <ItemLink key={id} title={original_title} id={id} />
            ))
          : 'Enter movie name'}
      </ul>
    </>
  );
}

export default Movies;
