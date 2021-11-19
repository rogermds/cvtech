const {Usuario, Curriculo, sequelize} = require("../models/");

const usuarioController = {
	getUsuarioIndex: async (req, res) => {
		let {id} = req.session.user;
		console.log("Valor do id: "+id);
		let curriculos = await Usuario.findAll({
			where: {
				id: id
			},
			include: {model: Curriculo}
		}).then(resultado =>{
			console.log(resultado[0].Curriculos);
			res.render('usuario',{
				curriculos: resultado[0].Curriculos
			})
		})
		//res.render("usuario");
	},

};

module.exports = usuarioController;
