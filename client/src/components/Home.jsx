import React, { useEffect } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import  { showBreeds } from '../actions';
import Card from './Card';



function Home (props){

    useEffect(()=>{
        props.showBreeds()
    }, []) 
    function renderBreeds() {
        return (props.breeds.map((el, index)=>{
            return (
                
                    <Card 
                key={index}
                image={el.image}
                name={el.name}
                height={el.height}
                weight={el.weight}
                life_span={el.life_span}
                 />
                  
               
            )
        }))
    }

    return (
        <div>

        <div className="contenedorbusqueda">

        <div className="searchbar">
            <form action="">
                
                    <input type="search"className="css-input" placeholder="Search breed here" />

            
            </form>
  </div> 

  <div>
      <select defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled className="selected">Choose a temperament</option>
        <option value="1">Friendly</option>
        <option value="2">Playful</option>
        <option value="3">Patient</option>
        <option value="4">Independent</option>
        <option value="5">Loyal</option>
    </select>
    </div>

        </div>
        
        <div className="tarjeta">

        <div className="cardContainer" >        
            {renderBreeds()}
            </div>
        </div>
    
    
        
        </div>
    )

}

function mapStateToProps(state) {
    return {
        breeds: state.breeds.list
    }
    
}

export default connect(mapStateToProps, { showBreeds })(Home);