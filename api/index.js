
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Breed, Temperament } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

      //   Breed.create({
      //   name: "Pug",
      //   height: "10",
      //   weight: "5",
      //   life_span: "10",
      //   image: "url"
      // });

      
      

      // Temperament.create({
      //   name: "Loyal",
        
      // });


  });
});
