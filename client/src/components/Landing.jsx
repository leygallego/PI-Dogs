import React, { useState } from 'react';
import AppRouter from '../routers/AppRouter';

import './Landing.css';


export default function Landing() {

    const [homePage, setHomePage] = useState(false)

    function handleClick() {
        setHomePage(true)
    }
    return (


        <div>
            {
                homePage ? <AppRouter /> : null
            }
            {
                !homePage ? <div 
                className="landing" > 
                <button 
                className="myButton" 
                onClick={handleClick} >"¡Get Started!"
                </button> 
                </div> : null
                }



        </div>






    )

}