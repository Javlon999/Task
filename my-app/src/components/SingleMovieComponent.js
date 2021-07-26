import React from 'react'
import {Link } from 'react-router-dom';
import './SingleMovie.css';
import LoaderComponent from './LoaderComponent';
const SingleMovieComponent = ({data,loading}) => {
    
return (
    <div className="SingleMovie">
      
    <div className="mainPage"> <Link to={'/'}><p>Home</p></Link></div>
    {data && loading? 
    <div><div className="description">
    <div className="moviePhoto">
      { <img src={data.files.poster_url} alt={''} width="350px" height="350px" />}

  </div>
  <div className="movieDetails">
    
  <h4>{data.title}</h4>
  <h6>{data.description}</h6>
  <h5>{data.year}</h5>
  <h6>{data.name}</h6>
  </div>
  </div>
   <div className="snapshots">  {data.files.snapshots ? data.files.snapshots.map((items)=>{
   
       return (
         <p key={items.id}><img src={items.snapshot_url} alt={""} width="150px" height="150px"/></p>
       )
     }):'no snapshots'}</div>
<div className="actors"><p>Actors</p></div>
     <div className="actorsName">
     
       {data.actors ? data.actors.map((items)=>{
         return (
           <p key={items.id}>{items.name}<br/><img src={items.photo_url} alt={""} width="100px" height="100px"/> </p>
         )
       }):'no actors'}
     </div> 
 
 </div>:<LoaderComponent/>}
        
           
    </div>
)
    
}

export default SingleMovieComponent
