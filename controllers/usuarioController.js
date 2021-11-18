const { validationResult } = require("express-validator");

const usuarioController = {
	getUsuarioIndex: (req, res) => {
		res.render("usuario");
	},
	getCadastrar: (req, res, next) => {
		res.render("cadastrar");
	},
	postCadastrar: (req, res, next) => {
		const errors = validationResult(req);
		console.log(req.body);
		console.log(errors);
	},
};

module.exports = usuarioController;
