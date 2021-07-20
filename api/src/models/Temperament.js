const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo *** exporting define model function
// Luego le injectamos la conexion a sequelize. *** after that adding conection to sequelize
module.exports = (sequelize) => {
  // defino el modelo de temperamentos *** define temperament model
  sequelize.define('temperament', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
