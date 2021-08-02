const { Router } = require('express');
const fetch = require("node-fetch");
const express = require('express');
const {Breed, Temperament} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const server = express();
server.use(express.json());
const router = Router();



router.get('/',  (req, res) => {
    // res.send('HOME DEL BACK (SOLO "/")')
    Temperament.sync()
        .then( async () => {
            const allData = await Temperament.findAll()
            if (allData.length > 0){
                res.send(allData)

            } else {

                getTemperamentApi()
            }
        } )
});

            function  getTemperamentApi() {
                const url = "https://api.thedogapi.com/v1/breeds";
                fetch(url)
                .then((data) => data.json())
                .then((result)=> {
                    result.map((el)=> {
                        Temperament.sync()
                        .then( async ()=>{
                            const createdTemperaments = await Temperament.create(
                                {
                            // id: el.id,
                            name: el.name
                                }
                            )
                            console.log("Created Temperaments");

                        })
                    })
                    // res.send(createBreeds)
                })
                .catch(error => console.log(error)) ;
            }



            router.post('/', (req, res)=>{
                
                const {name, height, weight, life_span} = req.body;

                Temperament.sync({force: false})
                .then(async ()=>{
                    const temperamentCreated = await Temperament.create({
                        name: name
                    
                    })
                    console.log("creado en la base de datos");
                })
                    res.send('')

            })


module.exports = router;
