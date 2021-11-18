const {Sequelize, Usuario} = require("../models");

const usuarioController = {
	getUsuarioIndex: (req, res) => {
		res.render("usuario");
	},
};

module.exports = usuarioController;
