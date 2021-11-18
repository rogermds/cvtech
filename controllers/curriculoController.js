const { username } = require("../database/config");
const {Usuario, Curriculo, sequelize} = require("../models/");

const curriculoController = {
	getVerCurriculo: (req, res) => {
		res.render("ver-curriculo");
	},
	getCriarCurriculo: (req, res) => {
		res.render("criar-curriculo");
	},
	postCriarCurriculo: async (req, res, next) =>{
		let dados = req.body;
		let dadosCurriculo = {
			idUsuario: req.session.user.id,
			...dados
		}
		let novoCurriculo = await Curriculo.create(dadosCurriculo);
		console.log(novoCurriculo);
	}
};

module.exports = curriculoController;