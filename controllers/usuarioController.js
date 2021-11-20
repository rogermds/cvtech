const {Usuario, Curriculo, sequelize} = require("../models/");
const fs = require('fs');
const bcrypt = require("bcryptjs");
const path = require("path");

const usuarioController = {
	getUsuarioIndex: async (req, res) => {
		let { id } = req.session.user;
		let curriculos = await Usuario.findAll({
			where: id,
			include: { model: Curriculo },
		}).then((resultado) => {
			res.render("usuario", {
				curriculos: resultado[0].Curriculos,
			});
		});
	},
	getEditarUsuario: async (req, res) => {
		let { id } = req.session.user;
		let editarUsuario = await Usuario.findByPk(id)
		res.render("editar-usuario", { editarUsuario, errors: [], old: [] });
	},
	postEditarUsuario: async (req, res) => {
		let { id } = req.session.user;
		let novosDados = req.body;
		novosDados.senha = bcrypt.hashSync(novosDados.senha, 10);
		let arquivo = req.file;
		let editarUsuario = await Usuario.findByPk(id);
		let oldAvatar = editarUsuario.dataValues.avatar;
		if(!req.file){
			novosDados.avatar = oldAvatar;
			editarUsuario.update(novosDados);
			let novaSession = {
				id: id,
				...novosDados
			}
			delete novaSession.senha;
			delete novaSession.confirmarSenha;
			req.session.user = novaSession;
			return res.redirect("/usuario");
		}
		if(oldAvatar && req.file){
			fs.unlink(path.resolve('public/images/avatar',oldAvatar), (err)=>{
				if(err) {
					return console.log(err);
				}
				console.log('Avatar antigo removido');
			})
			novosDados.avatar = arquivo.filename;
			editarUsuario.update(novosDados);
			
			let novaSession = {
				id: id,
				...novosDados
			}
			delete novaSession.senha;
			delete novaSession.confirmarSenha;
			req.session.user = novaSession;

			return res.redirect("/usuario");
		}
		novosDados.avatar = arquivo.filename;
		editarUsuario.update(novosDados);
		let novaSession = {
			id: id,
			...novosDados
		}
		delete novaSession.senha;
		delete novaSession.confirmarSenha;
		req.session.user = novaSession;
		
		return res.redirect("/usuario");	
	},
};

module.exports = usuarioController;
