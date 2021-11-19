const {Usuario, Curriculo, sequelize} = require("../models/");

const curriculoController = {
	getVisualizarCurriculo: async (req, res) => {
		let {id} = req.params
		let curriculo = await Curriculo.findByPk(id);
		let curUser = await Curriculo.findOne({
			where: {
				id: id
			},
			include: [{model: Usuario, attibutes: ["nome", "sobrenome", "avatar"]}]
		}).then(resultado =>{
			let dadosCurriculo = {
				...resultado.Usuario.dataValues,
				...resultado.dataValues
			}
			console.log(dadosCurriculo);
			//console.log(resultado.Usuario.dataValues);
			res.render("ver-curriculo", { curriculo: dadosCurriculo });
		});
		//res.render("ver-curriculo", { curriculo });
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
			email: req.session.user.email,
			...dados,
		};
		let novoCurriculo = await Curriculo.create(dadosCurriculo);
		let idCurriculo = novoCurriculo.dataValues.id
		return res.redirect("/usuario/curriculo/"+idCurriculo);
	},
};

module.exports = curriculoController;