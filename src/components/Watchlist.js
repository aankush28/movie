import React,{useContext} from 'react'
import { MovieContext } from '../Context';

export default function Watchlist() {
    const {state} = useContext(MovieContext);
    if(state != ''){
alert("please add Movies")
    }
    console.log(state)

    const del = ()=>{
alert('WE can fix in next update')
    }
    return (
        <div className="Pro">
        {state.watchList.map(movie=><>
        <div className="movie" key={movie.id}>
               <div className="card Por" style={{width: 300}}>
  <img src={movie.img} class="card-img-top" alt="..." style={{width: 300 , height:200}}/>
  <div class="card-body">
    <h3 class="card-title">{movie.name}</h3>
    <p class="card-text">Rating <b>{movie.rating}</b></p>
    <button href="#" class="btn btn-primary" onClick={del} >Remoove<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
  </div>
</div>
  </div>
      </>)} 
       </div>
    )
}
