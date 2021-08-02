import axios from 'axios';


export const SHOWALL = "SHOWALL";
export const POSTTEMPERAMENT = "POSTTEMPERAMENT";



export function showBreeds() {

    return (dispatch, getState) => {
        fetch('http://localhost:3001/dogs')
        .then((data) => data.json())//Los datos los pasamos a json
        .then((result) => {
            // console.log(result);
            dispatch ({
                type: SHOWALL,
                payload: result
            })
        })
    }
    
}

export function addTemperament(payload){

    return (dispatch, getState) => {
        dispatch({
            type: POSTTEMPERAMENT
        });
        axios.post('http://localhost:3001/temperament', payload)
        .then((response)=>{
            console.log("Posteado");
        })
    }

}

//await fetch(`https://api.thedogapi.com/v1/breeds`)
//     .then((data) => data.json())//Los datos los pasamos a json
//     .then((result) => { //resultado a transformar
//         var array = [];// array para guardar los datos seleccionados
//         var count = 0; // contador desde la posición 0
//         result.map((el) => { // mapea cada elemento
//             if (count === 8) {
//                 return
//             }
//             let datosSolicitados = {    //objeto con los datos escenciales
//                 id: el.id,
//                 name: el.name,
//                 height: el.height.metric,
//                 weight: el.weight.metric,
//                 life_span: el.life_span,
//                 image: el.image.url,
//             }
//             array.push(datosSolicitados)
//             count++
//         })

//         res.send(array)