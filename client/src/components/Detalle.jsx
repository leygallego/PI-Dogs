import React from 'react';
import './Detalle.css';


function Detalle(props) {
    return <div className="card">
  <img className="img" src={props.image} alt="Dog" />
  <div className="container">
    <h4><b>{props.name}</b></h4> 
    <h4><b>{props.height}</b></h4> 
    <h4><b>{props.weight}</b></h4> 
    <h4><b>{props.life_span}</b></h4> 
    <h4><b>{props.temperament}</b></h4> 


  </div>
</div>
}

export default Detalle;