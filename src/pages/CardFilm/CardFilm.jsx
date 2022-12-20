// import { useState } from 'react';
import { useParams } from 'react-router-dom';

import RequestApi from '../../hooks/RequestAPI';

export function CardFilm() {
  const { id } = useParams();
  const [dataFilm, setDataFilm] = RequestApi(null, id); // eslint-disable-line
  console.log(dataFilm);

  if (dataFilm) {
    console.log(dataFilm.genres);
  }

  return (
    <>
      {dataFilm ? (
        <div>
          <button>Go back</button>

          <div>
            <img src="" alt="" />

            <ul>
              <li>
                <h2>{dataFilm.original_title}</h2>
              </li>

              <li>User Score: {dataFilm.vote_average}</li>

              <li>
                <h3>Overview:</h3>
                {dataFilm.overview}
              </li>

              <li>
                <h4>Genres:</h4>
                {/* {dataFilm.genres[1].name} */}
              </li>
            </ul>
          </div>
          <div>
            Additional information
            <ul>
              <li>
                <a href="">Cast</a>
              </li>

              <li>
                <a href="">Reviews</a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CardFilm;
