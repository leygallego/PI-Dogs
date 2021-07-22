const { Router, response } = require('express');
const fetch = require("node-fetch");
const express = require('express');
const { Breed, Temperament } = require('../db');
// const { response } = require('../app');
const { Sequelize } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const server = express();
server.use(express.json());
const router = Router();
const { Op } = Sequelize;


// router.get('/',  (req, res) => {
//     // res.send('HOME DEL BACK (SOLO "/")')
//     Breed.sync()
//         .then( async () => {
//             const allData = await Breed.findAll()
//             if (allData > 0){
//                 res.send(allData)

//             } else {

//                 getBreedApi()
//             }
//         } )
// });

//             function  getBreedApi() {
//                 const url = "https://api.thedogapi.com/v1/breeds";
//                 fetch(url)
//                 .then((data) => data.json())
//                 .then((result)=> {
//                     result.map((el)=> {
//                         Breed.sync()
//                         .then( async ()=>{
//                             const createdBreeds = await Breed.create(
//                                 {
//                                     // id: el.id,
//                                     name: el.name,
//                                     height: el.height.metric,
//                                     weight: el.weight.metric,
//                                     life_span: el.life_span,
//                                     image: el.image.url, 
//                                 }
//                             )
//                             console.log("Created breeds");

//                         })
//                     })
//                     // res.send(createBreeds)
//                 })
//                 .catch(error => console.log(error)) ;
//             }

router.get('/', (req, res) => {

    let filter = {};
    let { name } = req.query;

    if (!name) {

        Breed.findAll().then((breed) => {
            if (breed) {
    
                var array = [];// array para guardar los datos seleccionados
                breed.map((el) => { // mapea cada elemento
                    if (el) {
                        let datosSolicitados = {    //objeto con los datos escenciales
                            // id: el.id,
                            name: el.name,
                            // height: el.height,
                            // weight: el.weight,
                            // life_span: el.life_span,
                            image: el.image,
                        }
                        array.push(datosSolicitados)
                    }
    
                })
    
                res.send(array)
                // console.log(array);
    
            } else {
    
                res.status(404).send();
    
            }
        })
    } else {

        if (name) {
            filter = {
                where: {
                    name: {
                        [Op.like]: `${name}%`
                    }
                }
            };
        }
    
        Breed.findAll(filter).then((breed) => {
            res.send(breed)
        })
    }


    

})

// router.get('/', (req, res) => {

    

    

// })


router.get('/:idRaza', (req, res) => {

    let { idRaza } = req.params;

    Breed.findAll().then((breed) => {
        if (breed) {

            var array = [];// array para guardar los datos seleccionados
            breed.map((el) => { // mapea cada elemento
                if (el.name === idRaza) {
                    let datosSolicitados = {    //objeto con los datos escenciales
                        // id: el.id,
                        name: el.name,
                        height: el.height,
                        weight: el.weight,
                        life_span: el.life_span,
                        image: el.image
                    }
                    array.push(datosSolicitados)

                }

            })

            res.send(array)

        } else {

            res.status(404).send();

        }
    })

})



module.exports = router;
