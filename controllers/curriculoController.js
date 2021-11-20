const {Usuario, Curriculo, sequelize} = require("../models/");

const curriculoController = {
	getVisualizarCurriculo: async (req, res) => {
		let {id} = req.params
		let curriculo = await Curriculo.findByPk(id);
		let dadosCurriculo = {
			...curriculo.dataValues,
			...req.session.user
			
		}
		console.log(dadosCurriculo)
		res.render("ver-curriculo", { curriculo: dadosCurriculo });
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
		dadosCurriculo.email = req.session.user.email;
		console.log(dadosCurriculo);
		let novoCurriculo = await Curriculo.create(dadosCurriculo);
		let idCurriculo = novoCurriculo.dataValues.id
		return res.redirect("/usuario/curriculo/"+idCurriculo);
	},
};

module.exports = curriculoController;