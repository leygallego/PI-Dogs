import React, { useState } from 'react';
import './Crear.css';
import { connect } from 'react-redux';
import { addTemperament } from '../actions';
import { useDispatch } from 'react-redux';



function Crear() {

    const dispatch = useDispatch();

    const [crear, setCrear] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTemperament(crear))
    }

    const handleChange = (e) => {
        setCrear({
            ...crear,
            [e.target.name]: e.target.value
        })
        console.log(crear);
    }

    return (

        <div className="content">

            <h1 className="logo">Crea <span>Raza de perro</span> </h1>

            <div class="contact-wraper">

                <div className="contact-form">

                    <form action="" onSubmit={(e) => { handleSubmit(e) }}>
                        <p>
                        <label>Nombre</label>
                        <input type="text"
                            name="name"
                            onChange={e => handleChange(e)} /> <br /><br />
                        </p>
                            <p>
                            <label>Altura</label>
                        <input type="text" name="height" onChange={e => handleChange(e)} /> <br /><br />
                            </p>
                        <p>
                        <label>Peso</label>
                        <input type="text" name="weight" onChange={e => handleChange(e)} /> <br /><br />
                        </p>
                        <p>
                        <label>Esperanza de Vida</label>
                        <input type="text" name="life_span" onChange={e => handleChange(e)} /> <br /><br />
                        </p>

                        {/* <input type="submit" value='Create' /> */}
                        <p class="block">
                        <button value='Create'>
                            Crear raza
                        </button>
                    </p>



                    </form>

                </div>




            </div>

        </div>

        // <div className="form" >
        //     <h1>CREAR RAZA DE PERRO</h1>

        //     <form onSubmit={(e)=>{handleSubmit(e)}}>
        //     <input type="text" name="name" onChange={e => handleChange(e)} /> <br /><br />
        //     <input type="text" name="height" onChange={e => handleChange(e)} /> <br /><br />
        //     <input type="text" name="weight" onChange={e => handleChange(e)} /> <br /><br />
        //     <input type="text" name="life_span" onChange={e => handleChange(e)} /> <br /><br />
        //     <input type="submit" value='Create' />


        //     </form>

        // </div>

    )
}

export default connect()(Crear);
