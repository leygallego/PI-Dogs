import React, { useState } from 'react'

function Crear() {

    
        
        const [crear, setCrear] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: ""
        })
    

    const handleChange = (e) => {
        setCrear ({
            ...crear,
            [e.target.name]: e.target.value
        })
        console.log(crear);
    }

    return (

        <div>
            <h1>CREAR RAZA DE PERRO</h1>

            <form action="">
            <input type="text" name="name" onChange={e => handleChange(e)} /> <br /><br />
            <input type="text" name="height" onChange={e => handleChange(e)} /> <br /><br />
            <input type="text" name="weight" onChange={e => handleChange(e)} /> <br /><br />
            <input type="text" name="life_span" onChange={e => handleChange(e)} /> <br /><br />
            <input type="submit" value='Create' />


            </form>

        </div>
        
    )
}

export default Crear;
