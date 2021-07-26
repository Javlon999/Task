
import React, { useEffect } from 'react';
import get from "lodash/get";
import { useDispatch, useSelector } from "react-redux";
import { loadSingleMovie } from '../Redux/actions/actions';
import SingleMovieComponent from '../components/SingleMovieComponent';


function SingleMovie({match}) {

  const dispatch = useDispatch();
 
  const loading=useSelector((state) => state.singleMovie.loading);
  const singleMovie = useSelector((state) => state.singleMovie.data.data);
  
  const data=get(singleMovie,'data.movie')
 
  const {id}=match.params
  useEffect(() => {
    dispatch(loadSingleMovie({payload:id}));
  }, [dispatch,id]);
 

  return (
    <SingleMovieComponent data={data} loading={loading}/>
    
  );
}

export default SingleMovie;
