const bcrypt = require("bcryptjs");
const { Sequelize, Usuario } = require("../models");
const { validationResult, body } = require("express-validator");
const Op = Sequelize.Op;

const indexController = {
	getIndex: (req, res) => {
		res.render("index");
	},
	getLogin: (req, res) => {
		res.render("login", {
			created: null,
		});
	},
	getLogout: (req, res, next) => {
		req.session.destroy();
		res.redirect("/");
	},
	postLogin: async (req, res) => {
		let dadosBody = req.body;
		let usuarioLogin = await Usuario.findOne({
			where: {
				email: dadosBody.email,
			},
			attributes: ["email", "senha", "nome", "id"],
		})
			.then((resultado) => {
				if (bcrypt.compareSync(dadosBody.senha, resultado.dataValues.senha)) {
					let sessaoUsuario = {
						id: resultado.dataValues.id,
						nome: resultado.dataValues.nome,
						email: resultado.dataValues.email,
					};
					req.session.user = sessaoUsuario;
					res.locals.user = sessaoUsuario;
					return res.redirect("/usuario");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},
	getCadastrar: (req, res, next) => {
		res.render("cadastrar", {
			errors: [],
			old: [],
		});
	},
	postCadastrar: async (req, res, next) => {
		const errors = validationResult(req);
		var dados = req.body;
		let old = req.body;
		if (errors.isEmpty() && dados.termos) {
			dados.senha = bcrypt.hashSync(dados.senha, 10);
			let usuarioCadastrado = await Usuario.create(dados);
			return res.render("login", {
				created: true,
			});
		} else {
			console.log(errors);
			return res.render("cadastrar", {
				errors: errors.mapped(),
				old: req.body,
			});
		}
	},
};

module.exports = indexController;
