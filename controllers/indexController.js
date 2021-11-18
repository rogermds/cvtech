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
			errors: [],
			old: [],
		});
	},
	getLogout: (req, res, next) => {
		req.session.destroy();
		res.redirect("/");
	},
	postLogin: async (req, res) => {
		const errors = validationResult(req);
		let dadosBody = req.body;
		let usuarioLogin = await Usuario.findOne({
			where: {
				email: dadosBody.email,
			},
			attributes: ["email", "senha", "nome", "id"],
		})
			.then((resultado) => {
				if (errors.isEmpty()) {
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
				} else {
					console.log(errors);
					return res.render("cadastrar", {
						errors: errors.mapped(),
						old: req.body,
					});
				}
			})
			.catch(
				console.log('catch');
				// res.redirect('/login')
			);
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
