const { validationResult, body } = require("express-validator");
const {Sequelize, Usuario} = require("../models");

const usuarioController = {
	getUsuarioIndex: (req, res) => {
		res.render("usuario");
	},
	getCadastrar: (req, res, next) => {
		res.render("cadastrar");
	},
	postCadastrar: async (req, res, next) => {
		const errors = validationResult(req);
		var dados = req.body
		if(errors.isEmpty()){
			if(dados.senha === dados.confirmarSenha){
				console.log("entrou sem errors");
				let usuarioCadastrado = await Usuario.create(dados);
				return res.send(usuarioCadastrado);
			}
			
		}
		console.log(errors);
	},
};

module.exports = usuarioController;
