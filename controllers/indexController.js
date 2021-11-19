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
			erroSenha: []
		});
	},
	getLogout: (req, res, next) => {
		req.session.destroy();
		res.redirect("/");
	},
	postLogin: async (req, res) => {
		const errors = validationResult(req);
		let dadosBody = req.body;
		console.log(errors)
		if (errors.isEmpty()) {
		let usuarioLogin = await Usuario.findOne({
			where: {
				email: dadosBody.email,
			},
			attributes: ["email", "senha", "nome", 'sobrenome', "id"],
		}).then(
				(resultado) => {
				if (bcrypt.compareSync(dadosBody.senha, resultado.dataValues.senha)) {
					let sessaoUsuario = {
						id: resultado.dataValues.id,
						nome: resultado.dataValues.nome,
						sobrenome: resultado.dataValues.sobrenome,
						email: resultado.dataValues.email,
					};
					req.session.user = sessaoUsuario;
					res.locals.user = sessaoUsuario;
					return res.redirect("/usuario");
				} else {
					return res.render("login", {
						erroSenha: "Senha incorreta!",
						old: dadosBody,
						created: null,
						errors: [],
					});
				}
			})
			.catch((error) => {
				console.log(error);
			})} else {
				console.log(errors);
				return res.render("login", {
					errors: errors.mapped(),
					old: dadosBody,
					created: null,
					erroSenha: [],
				});
			}
	},
	getCadastrar: (req, res, next) => {
		res.render("cadastrar-usuario", {
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
				old: [],
				errors: [],
				erroSenha: []
			});
		} else {
			console.log(errors);
			return res.render("cadastrar-usuario", {
				errors: errors.mapped(),
				old: dados,
			});
		}
	},
};

module.exports = indexController;
