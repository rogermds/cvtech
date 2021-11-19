'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Curriculos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			idUsuario: {
				type: Sequelize.INTEGER.UNSIGNED,
				references: {
					model: {
						tableName: "Usuarios",
					},
					key: "id",
				},
			},
			profissao: {
				type: Sequelize.STRING,
			},
			github: {
				type: Sequelize.STRING,
			},
			linkedin: {
				type: Sequelize.STRING,
			},
			uf: {
				type: Sequelize.STRING,
			},
			cidade: {
				type: Sequelize.STRING,
			},
			pais: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			celular: {
				type: Sequelize.STRING,
			},
			whatsapp: {
				type: Sequelize.STRING,
			},
			resumo1: {
				type: Sequelize.STRING,
			},
			resumo2: {
				type: Sequelize.STRING,
			},
			resumo3: {
				type: Sequelize.STRING,
			},
			expcargo1: {
				type: Sequelize.STRING,
			},
			expperiodo1: {
				type: Sequelize.STRING,
			},
			expempresa1: {
				type: Sequelize.STRING,
			},
			expfuncao1: {
				type: Sequelize.STRING,
			},
			expcargo2: {
				type: Sequelize.STRING,
			},
			expperiodo2: {
				type: Sequelize.STRING,
			},
			expempresa2: {
				type: Sequelize.STRING,
			},
			expfuncao2: {
				type: Sequelize.STRING,
			},
			expcargo3: {
				type: Sequelize.STRING,
			},
			expperiodo3: {
				type: Sequelize.STRING,
			},
			expempresa3: {
				type: Sequelize.STRING,
			},
			expfuncao3: {
				type: Sequelize.STRING,
			},
			cursonome1: {
				type: Sequelize.STRING,
			},
			cursoperiodo1: {
				type: Sequelize.STRING,
			},
			cursoinstituicao1: {
				type: Sequelize.STRING,
			},
			cursoconhecimento1: {
				type: Sequelize.STRING,
			},
			cursonome2: {
				type: Sequelize.STRING,
			},
			cursoperiodo2: {
				type: Sequelize.STRING,
			},
			cursoinstituicao2: {
				type: Sequelize.STRING,
			},
			cursoconhecimento2: {
				type: Sequelize.STRING,
			},
			cursonome3: {
				type: Sequelize.STRING,
			},
			cursoperiodo3: {
				type: Sequelize.STRING,
			},
			cursoinstituicao3: {
				type: Sequelize.STRING,
			},
			cursoconhecimento3: {
				type: Sequelize.STRING,
			},
			hardnome1: {
				type: Sequelize.STRING,
			},
			hardnota1: {
				type: Sequelize.STRING,
			},
			hardnome2: {
				type: Sequelize.STRING,
			},
			hardnota2: {
				type: Sequelize.STRING,
			},
			hardnome3: {
				type: Sequelize.STRING,
			},
			hardnota3: {
				type: Sequelize.STRING,
			},
			hardnome4: {
				type: Sequelize.STRING,
			},
			hardnota4: {
				type: Sequelize.STRING,
			},
			hardnome5: {
				type: Sequelize.STRING,
			},
			hardnota5: {
				type: Sequelize.STRING,
			},
			hardnome6: {
				type: Sequelize.STRING,
			},
			hardnota6: {
				type: Sequelize.STRING,
			},
			softnome1: {
				type: Sequelize.STRING,
			},
			softnota1: {
				type: Sequelize.STRING,
			},
			softnome2: {
				type: Sequelize.STRING,
			},
			softnota2: {
				type: Sequelize.STRING,
			},
			softnome3: {
				type: Sequelize.STRING,
			},
			softnota3: {
				type: Sequelize.STRING,
			},
			softnome4: {
				type: Sequelize.STRING,
			},
			softnota4: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Curriculos');
  }
};