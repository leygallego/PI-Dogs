const { Router } = require('express');
const fetch = require("node-fetch");
const express = require('express');
const {Breed, Temperament} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const server = express();
server.use(express.json());
const router = Router();



// router.get('/',  (req, res) => {
//     // res.send('HOME DEL BACK (SOLO "/")')
//     Temperament.sync()
//         .then( async () => {
//             const allData = await Temperament.findAll()
//             if (allData > 0){
//                 res.send(allData)

//             } else {

//                 getTemperamentApi()
//             }
//         } )
// });

//             function  getTemperamentApi() {
//                 const url = "https://api.thedogapi.com/v1/breeds";
//                 fetch(url)
//                 .then((data) => data.json())
//                 .then((result)=> {
//                     result.map((el)=> {
//                         Temperament.sync()
//                         .then( async ()=>{
//                             const createdTemperaments = await Temperament.create(
//                                 {
//                             // id: el.id,
//                             name: el.temperament
//                                 }
//                             )
//                             console.log("Created Temperaments");

//                         })
//                     })
//                     // res.send(createBreeds)
//                 })
//                 .catch(error => console.log(error)) ;
//             }


router.get ('/', (req, res) => {

   
    Temperament.findAll().then((temperament)=> {
    if (temperament) {

        var array = [];// array para guardar los datos seleccionados
                temperament.map((el) => { // mapea cada elemento
                    // console.log(el);
                    if (el.name) {

                        let datosBasicos = {
                            // id: el.id,
                            name: el.name
                        }
                        
                    array.push(datosBasicos)
                        //array.push(el)
                    }
                   

                })

                res.send(array)
    } else {

        res.status(404).send();

    }
})

})













// router.get('/',  async (req, res) => {
//     //res.send('Desde Temperament ruta 4')

    
//         await fetch(`https://api.thedogapi.com/v1/breeds`)
//             .then((data) => data.json())
//             .then((result) => {
//                 var array = [];// array para guardar los datos seleccionados
//                 result.map((el) => { // mapea cada elemento
//                     if (el.temperament) {

//                         let datosBasicos = {
//                             id: el.id,
//                             name: el.temperament
//                         }
                        
//                     array.push(datosBasicos)
//                         //array.push(el)
//                     }
                   

//                 })

//                 res.send(array)

//             })
//             .catch((error) => res.status(401))

// });

// router.get('/temperament/:detalles',  (req, res) => {
//     res.send('Desde Temperament ruta 5')
// });

// router.get('/', function (req, res) {
//     res.send('Estoy conectado con temperamento')
// })

// router.get('/', async function (req, res) {

//     await fetch(`https://api.thedogapi.com/v1/breeds`)
//             .then ((data)=> data.json())//Los datos los pasamos a json
//             .then((result)=> { //resultado a transformar
//                var array = [];// array para guardar los datos seleccionados
//                 result.map((el)=>{ // mapea cada elemento
//                     if(el === "temperament"){ 
//                            array.push(el)  
//                     }
                    
//                 })
                
//                 res.send(array)
//             })
//             .catch((err)=>res.status(401))
    
//         })


module.exports = router;
