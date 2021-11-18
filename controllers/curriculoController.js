const curriculoController = {
	getVerCurriculo: (req, res) => {
		res.render("ver-curriculo");
	},
	getCriarCurriculo: (req, res) => {
		res.render("criar-curriculo");
	},
};

module.exports = curriculoController;