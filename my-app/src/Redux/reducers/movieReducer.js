import {GET_MOVIE_LOADING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR} from "../actions/actions";

const initialState = {
   data: [],
   loading: false,
   error: ''
};

export default function movieReducer(state = initialState, action) {
   switch (action.type) {
       case GET_MOVIE_LOADING: {
           return {
               ...state,
               loading: true,
               error:''
           };
       }
       case GET_MOVIE_SUCCESS: {
           return {
               ...state,
               data: action.data,
               loading: true
           }
       }
       case GET_MOVIE_ERROR: {
           return {
               ...state,
               loading: false,
               error: action.error
           };
       }
       default: {
           return state;
       }
   }
}