const { validationResult, body } = require("express-validator");
const {Sequelize, Usuario} = require("../models");
const bcrypt = require('bcryptjs')

const usuarioController = {
	getUsuarioIndex: (req, res) => {
		res.render("usuario");
	},
	getCadastrar: (req, res, next) => {
		res.render("cadastrar", {
			errors: []
		});
	},
	postCadastrar: async (req, res, next) => {
		const errors = validationResult(req);
		var dados = req.body
		if(errors.isEmpty()){
			dados.senha = bcrypt.hashSync(dados.senha, 10)
				let usuarioCadastrado = await Usuario.create(dados);
				return res.redirect('/login');
		}
		else{
			console.log(errors);
			return res.render('cadastrar',{
				errors: errors.mapped()
			})
		}
		
	},
	
};

module.exports = usuarioController;
