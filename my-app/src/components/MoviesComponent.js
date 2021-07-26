import React from 'react'
import {Link } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import './Movies.css';
const MoviesComponent = ({loading,datas,handlePagePrevios,handlePageNext}) => {
    
return (
    <div className="AllMovies">
        {loading && datas? 
    
        <div>
             {console.log('loading',loading)}
        <div  className="Movies">
        { datas ? datas.map((items)=>{
          return (
            <div className="MovieDetails" key={items.id}>
              <Link to={`/movies/${items.id}`}>
              <div className="MovieDetails2">
              <img src={items.files.poster_url} alt={''} width="200px" height="200px" />
              <div className="MovieQuality">
              <p className="new">{items.params.is_new ? 'NEW':''}</p>
              <p className="hd">{items.params.is_hd ? 'FULLHD':''}</p>
              </div>
              <p className='titleOfMovie'>{items.title}</p><br/><p className='yearOfMovie'>{items.year}</p>
              </div>
              </Link>
              </div>
          )
        }) :'something wrong'}
        </div>
        {datas ? 
        <div>   

<button onClick={handlePagePrevios}>Previos Page</button>
<button onClick={handlePageNext}>Next Page</button>

</div> :'something wrong'}
       
        </div> :<LoaderComponent/>}
    </div>
)
    
}

export default MoviesComponent
