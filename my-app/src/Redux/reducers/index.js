import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import singleMovieReducer from "./singleMovieReducer";

const reducers = combineReducers({
   movie: movieReducer,
   singleMovie:singleMovieReducer,

});

export default reducers;
