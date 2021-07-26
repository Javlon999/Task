
import axios from 'axios';
import config from '../../config/index';

export const GET_MOVIE_LOADING = 'GET_MOVIE_LOADING';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';
export const GET_SINGLE_MOVIE_LOADING = 'GET_SINGLE_MOVIE_LOADING';
export const GET_SINGLE_MOVIE_SUCCESS = 'GET_SINGLE_MOVIE_SUCCESS';
export const GET_SINGLE_MOVIE_ERROR = 'GET_SINGLE_MOVIE_ERROR';

export const loadMovies = ({payload}) => dispatch => {
  
   dispatch({ type: GET_MOVIE_LOADING });
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
  
    axios.get(`${config.API_ROOT}/list?page=${payload}&user=${config.API_KEY}`, { headers })    
    .then(
        response => dispatch({ type: GET_MOVIE_SUCCESS, data:response}),
        error => dispatch({ type: GET_MOVIE_ERROR, error: error.message || 'Unexpected Error!!!' })
    )
      
};

export const loadSingleMovie=({payload}) => dispatch => {
  dispatch({type:GET_SINGLE_MOVIE_LOADING});
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

   axios.get(`${config.API_ROOT}/show/${payload}?user=${config.API_KEY}`, { headers })    
    .then(
        response => dispatch({ type: GET_SINGLE_MOVIE_SUCCESS, data:response}),
        error => dispatch({ type: GET_SINGLE_MOVIE_ERROR, error: error.message || 'Unexpected Error!!!' })
    )
}

