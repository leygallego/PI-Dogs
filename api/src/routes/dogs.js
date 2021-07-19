const { Router } = require('express');
const fetch = require("node-fetch");
const express = require('express');
const { Breed, Temperament } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const server = express();
server.use(express.json());
const router = Router();



router.get('/',  (req, res) => {
    // res.send('HOME DEL BACK (SOLO "/")')
    Breed.sync()
        .then( async () => {
            const allData = await Breed.findAll()
            if (allData > 0){
                res.send(allData)

            } else {

                getBreedApi()
            }
        } )
});

            function  getBreedApi() {
                const url = "https://api.thedogapi.com/v1/breeds";
                fetch(url)
                .then((data) => data.json())
                .then((result)=> {
                    result.map((el)=> {
                        Breed.sync()
                        .then( async ()=>{
                            const createdBreeds = await Breed.create(
                                {
                                    id: el.id,
                                    name: el.name,
                                    height: el.height.metric,
                                    weight: el.weight.metric,
                                    life_span: el.life_span,
                                    image: el.image.url, 
                                }
                            )
                            console.log("Created breeds");

                        })
                    })
                    // res.send(createBreeds)
                })
                .catch(error => console.log(error)) ;
            }

// router.get('/dogs',  (req, res) => {
//     res.send('Desde dogs ruta 2 ("/dogs") ')
// });

// router.get('/dogs/:name',  (req, res) => {
//     res.send('Desde params ruta 3 ("/dogs/:parámetro") ')
// });

//TODO: implementar tolowerCase para los parámetros o querys
//TODO: Captura de errores, corregir.
//TODO: Revisar expresiones regulares para búsquedas parecidas ej.  escribí pinshcher y quiero que me traiga las razas parecidas



// router.get('/', async function (req, res) {


// await fetch(`https://api.thedogapi.com/v1/breeds`)
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
//     })
//     .catch((err) => res.status(401))
// })





// })

// router.get('/:name', async function (req, res) {
//     let { name } = req.query;
//         if (name){
//            await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
//         .then ((data)=> data.json())
//         .then((result)=> {
//             var array = [];// array para guardar los datos seleccionados
//             result.map((el) => { // mapea cada elemento
//                 if (el) {
//                      let datosSolicitados = {    //objeto con los datos escenciales
//                     id: el.id,
//                     name: el.name,
//                     height: el.height.metric,
//                     weight: el.weight.metric,
//                     life_span: el.life_span
//                 }
//                 array.push(datosSolicitados)
//                     //array.push(el)
//                 }
//             })
//             res.send(array)     
//         } )
//         .catch((error)=>res.status(401))
//         } else {res.status(422).json({error: "No existe la raza que se ingresó"})}


// })


// router.get('/dogs/:idRaza', async (req, res) => {
//     //res.send('Desde params ruta 3 ("/dogs/:parámetro") ')

//     let { idRaza } = req.params;
    
//         await fetch(`https://api.thedogapi.com/v1/breeds`)
//             .then((data) => data.json())
//             .then((result) => {
//                 var array = [];// array para guardar los datos seleccionados
//                 result.map((el) => { // mapea cada elemento
//                     if (el.name === idRaza) {
//                          let datosSolicitados = {    //objeto con los datos escenciales
//                         id: el.id,
//                         name: el.name,
//                         height: el.height.metric,
//                         weight: el.weight.metric,
//                         life_span: el.life_span
//                     }
//                     array.push(datosSolicitados)
//                         //array.push(el)
//                     }
                   

//                 })

//                 res.send(array)

//             })
//             .catch((error) => res.status(401).send("Raza inexistente"))
    
// });


// router.get('/',  (req, res) => {
// if(req.query){
//     res.send("recibiendo los que llamamos query")
// }
// if (req.params) {
//     res.send("recibido params")

// }
// res.send('nulo')

// const {allQuery} = req.query;
// const {allParams} = req.params;

// if(allQuery) {
//     res.send("recibido por query")
// } 

// });






// router.post('/', async function (req, res){
//     let {id, name, height, weight, life_span} =  req.body;

//    let breedTemp = [];

//     if(!id && !name && !height && weight && life_span){

//         res.sendStatus(422).json({error: "No se recibieron los parámetros necesarios para crear la raza"})
//     } else {

//         let objBreed = {
//             id,
//             name,
//             height,
//             weight,
//             life_span
//         }
//         breedTemp.push(objBreed)
//         res.send("Parámetros recibidos correctamente")
//     }


// if(id && name && height && weight && life_span){
//     try {

//         let breedCreated = await Breed.findOrCreate({
//             where:{
//                 id,
//                 name,
//                 height,
//                 weight,
//                 life_span
//             }
//         })

//     } catch (error) {
//         res.sendStatus(422).json({error: "Datos incorrectos"})
//     }
// }



// })

// router.get('/:idRaza', async function (req, res) {

//     let { idRaza } = req.params

//     await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${idRaza}`)


// })

module.exports = router;
