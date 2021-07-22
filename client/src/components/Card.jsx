import React from 'react';
import { NavLink } from 'react-router-dom';
import  './Card.css';

export default function Card(props) {
  
  return <div className="card">

    <NavLink exact to="/detalle" >
    <img className="img" src={props.image} alt="Dog" />
    </NavLink>
  
  <div className="container">
    <h4><b>{props.name}</b></h4> 
    {/* <h4><b>{props.height}</b></h4> 
    <h4><b>{props.weight}</b></h4> 
    <h4><b>{props.life_span}</b></h4>  */}
    <h4><b>{props.temperament}</b></h4> 


  </div>
</div>


};

// {
//     "name": "Affenpinscher",
//     "height": "23 - 29",
//     "weight": "3 - 6",
//     "life_span": "10 - 12 years"
// },

// {

//     "height": {
//       "metric": "43 - 51"
//     },
//     "id": 21,
//     "image": {
//       "url": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg",
//     },
//     "life_span": "12 - 14 years",
//     "name": "Australian Cattle Dog",
//     "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
//     "weight": {
//       "metric": "20 - 28"
//     }
//   }