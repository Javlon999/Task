
import React, { useEffect, useState } from 'react';
import get from "lodash/get";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from '../Redux/actions/actions';
import MoviesComponent from '../components/MoviesComponent';


function Allmovies() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const loading =useSelector((state)=>state.movie.loading)
  const readyMovie = useSelector((state) => state.movie);
  const datas=get(readyMovie,'data.data.data.movies')
  useEffect(() => {
    dispatch(loadMovies({payload:page}));
  }, [dispatch,page]);
 

  
 const handlePageNext=()=>{
   setPage(page+1)

    dispatch(loadMovies({
      payload:page+1
    }))
   }
  const handlePagePrevios=()=>{
    if(page>=1){setPage(page-1)
 
      dispatch(loadMovies({
        payload:page-1
      }))}
      else{
        setPage(1)
      }
    
    }
  
  return (
         <MoviesComponent loading={loading} datas={datas} handlePagePrevios={handlePagePrevios} handlePageNext={handlePageNext}/>
  );
}

export default Allmovies;
