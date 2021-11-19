'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Curriculo,{
        foreignKey: "idUsuario"
      })
    }
  };
  Usuario.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};