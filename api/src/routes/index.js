const { Router } = require('express');
const fetch = require("node-fetch");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const ruta1 = require('./dogs.js');
const ruta2 = require('./dogs.js');
const ruta3 = require('./dogs.js');
const ruta4 = require('./temperament');






// const tempRouter = require('./temperament');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




// router.use('/', ruta1);
router.use('/dogs', ruta2);
router.use('/dogs/:name', ruta3);
router.use('/temperament', ruta4);




module.exports = router;
