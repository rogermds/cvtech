const {Usuario, Curriculo, sequelize} = require("../models/");
const fs = require('fs');

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
		let editarUsuario = await Usuario.findByPk(id)
		let oldAvatar = editarUsuario.dataValues.avatar;
		if(!req.file){
			editarUsuario.update(novosDados);
		}
		else{
			if(oldAvatar.length > 0){
				fs.unlink('../public/images/avatar'+oldAvatar,function(err){
					if(err) return console.log(err);
					console.log('Avatar antigo removido');
			   }); 
			}
			novosDados.avatar = req.file.filename;
			editarUsuario.update(novosDados);
		}		
		res.render("editar-usuario");
	},
};

module.exports = usuarioController;
