import React, { useEffect } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import    allBreeds   from '../actions';



function Home (props){

    useEffect(()=>{
        props.allBreeds()
    })
    function renderBreeds() {
        return (props.breeds.map((el, index)=>{
            return (
                <li key={index} >
                    {el.name}
                </li>
            )
        }))
    }

    return (
        <>


        <div className="">
            <form action="">
                
                    <input type="search"className="css-input" placeholder="Search breed here" />

            
            </form>
  </div>
  <br />
 

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

    <div>
        <h1>DATOS</h1>
        <ul>
            {renderBreeds()}
        </ul>
    </div>
    
        
        </>
    )

}

function mapStateToProps(state) {
    return {
        breeds: state.breeds.list
    }
    
}

export default connect(mapStateToProps, { allBreeds })(Home);