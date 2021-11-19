'use strict';
const {
  Model
} = require('sequelize');
const Usuario = require('./Usuario');
module.exports = (sequelize, DataTypes) => {
  class Curriculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curriculo.belongsTo(models.Usuario,{
        foreignKey:"id"
      })
    }
  };
  Curriculo.init(
		{
			idUsuario:{
				type: DataTypes.INTEGER.UNSIGNED,
				references: 'Usuario'
			},
			profissao: DataTypes.STRING,
			github: DataTypes.STRING,
			linkedin: DataTypes.STRING,
			uf: DataTypes.STRING,
			cidade: DataTypes.STRING,
			pais: DataTypes.STRING,
			email: DataTypes.STRING,
			celular: DataTypes.STRING,
			whatsapp: DataTypes.STRING,
			resumo1: DataTypes.STRING,
			resumo2: DataTypes.STRING,
			resumo3: DataTypes.STRING,
			resumo3: DataTypes.STRING,
			expcargo1: DataTypes.STRING,
			expperiodo1: DataTypes.STRING,
			expempresa1: DataTypes.STRING,
			expfuncao1: DataTypes.STRING,
			expcargo2: DataTypes.STRING,
			expperiodo2: DataTypes.STRING,
			expempresa2: DataTypes.STRING,
			expfuncao2: DataTypes.STRING,
			expcargo3: DataTypes.STRING,
			expperiodo3: DataTypes.STRING,
			expempresa3: DataTypes.STRING,
			expfuncao3: DataTypes.STRING,
			cursonome1: DataTypes.STRING,
			cursoperiodo1: DataTypes.STRING,
			cursoinstituicao1: DataTypes.STRING,
			cursoconhecimento1: DataTypes.STRING,
			cursonome2: DataTypes.STRING,
			cursoperiodo2: DataTypes.STRING,
			cursoinstituicao2: DataTypes.STRING,
			cursoconhecimento2: DataTypes.STRING,
			cursonome3: DataTypes.STRING,
			cursoperiodo3: DataTypes.STRING,
			cursoinstituicao3: DataTypes.STRING,
			cursoconhecimento3: DataTypes.STRING,
			hardnome1: DataTypes.STRING,
			hardnota1: DataTypes.STRING,
			hardnome2: DataTypes.STRING,
			hardnota2: DataTypes.STRING,
			hardnome3: DataTypes.STRING,
			hardnota3: DataTypes.STRING,
			hardnome4: DataTypes.STRING,
			hardnota4: DataTypes.STRING,
			hardnome5: DataTypes.STRING,
			hardnota5: DataTypes.STRING,
			hardnome6: DataTypes.STRING,
			hardnota6: DataTypes.STRING,
			softnome1: DataTypes.STRING,
			softnota1: DataTypes.STRING,
			softnome2: DataTypes.STRING,
			softnota2: DataTypes.STRING,
			softnome3: DataTypes.STRING,
			softnota3: DataTypes.STRING,
			softnome4: DataTypes.STRING,
			softnota4: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Curriculo",
		}
	);
  return Curriculo;
};