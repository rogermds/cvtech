const usuarioController = {
	getUsuarioIndex: (req, res) => {
		res.render("usuario");
	},
	getVerCurriculo: (req, res) => {
		res.render("ver-cuculo");
	},
	getCriarCurriculo: (req, res) => {
		res.render("criar-curriculo");
	},
};

module.exports = usuarioController;