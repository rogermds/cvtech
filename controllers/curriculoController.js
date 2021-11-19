const { username } = require("../database/config");
const {Usuario, Curriculo, sequelize} = require("../models/");

const curriculoController = {
	getVisualizarCurriculo: async (req, res) => {
		let {id} = req.params
		let curriculo = await Curriculo.findByPk(1);
		res.render("ver-curriculo", { curriculo });
	},
	getVisualizarTodosCurriculos: async (req, res) => {
		let curriculos = await Curriculo.findAll({
			where: {
				idUsuario: req.session.user.id
			},
		})
		let teste = curriculos.length
		res.json(teste);
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
		let novoCurriculo = await Curriculo.create(dadosCurriculo);
		return res.redirect("/usuario/curriculo/visualizar");
	},
};

module.exports = curriculoController;