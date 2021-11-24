const {Usuario, Curriculo, sequelize} = require("../models/");

const curriculoController = {
	getVisualizarCurriculo: async (req, res) => {
		let { id } = req.params;
		let curriculo = await Curriculo.findByPk(id);
		let dadosCurriculo = {
			...curriculo.dataValues,
			...req.session.user,
		};
		res.render("ver-curriculo", { curriculo: dadosCurriculo });
	},
	getCriarCurriculo: (req, res) => {
		res.render("criar-curriculo");
	},
	postCriarCurriculo: async (req, res, next) => {
		let dados = req.body;
		let dadosCurriculo = {
			idUsuario: req.session.user.id,
			...dados,
		};
		dadosCurriculo.email = req.session.user.email;
		let novoCurriculo = await Curriculo.create(dadosCurriculo);
		let idCurriculo = novoCurriculo.dataValues.id;
		return res.redirect("/usuario/curriculo/" + idCurriculo);
	},
	getEditarCurriculo: async (req, res) => {
		let { id } = req.params;
		let curriculo = await Curriculo.findByPk(id);
		let dadosCurriculo = {
			id,
			...curriculo.dataValues,
			...req.session.user,
		};
		res.render("editar-curriculo", { curriculo: dadosCurriculo });
	},
	postEditarCurriculo: async (req, res) => {
		let { id } = req.params;
		console.log(id);
		console.log(req.session);
		let novosDados = req.body;
		let editarCurriculo = await Curriculo.findByPk(id);
		editarCurriculo.update(novosDados);
		return res.redirect('/usuario/')
	},
};

module.exports = curriculoController;