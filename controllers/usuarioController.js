const {Usuario, Curriculo, sequelize} = require("../models/");

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
		res.render("editar-usuario", { editarUsuario });
		// res.send(editarUsuario);
	},
	postEditarUsuario: (req, res) => {
		res.render("editar-usuario");
	},
};

module.exports = usuarioController;
