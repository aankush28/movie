import React ,{useState ,useContext}from 'react'
import { Link } from 'react-router-dom';
import { MovieContext } from '../Context';
import Pro from './Pro';
export default function Add() {
 const [cart,setCart] = useState([]);
 const addToCart = (movie) =>{
     setCart([...cart,movie])
     console.log("click,",movie)

 }
 const { state,dispatch } = useContext(MovieContext)
    return (
        <div>
            
               <div className="Pro">
           
           {Pro.map((movie)=>(
               <div className="movie" key={movie.id}>
               <div className="card Por" style={{width: 300}}>
  <img src={movie.img} class="card-img-top" alt="..." style={{width: 300 , height:200}}/>
  <div class="card-body">
    <h3 class="card-title">{movie.name}</h3>
    <p class="card-text">Rating <b>{movie.rating}</b></p>
    <button href="#" class="btn btn-primary" onClick={() => dispatch({ type: "ADD_TO_WATCHLIST",payload:movie })} >Add Watchlist</button>
  </div>
</div>
  </div>
))}
</div>
</div>
    )
}
