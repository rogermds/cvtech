const usuarioController = {
	getCadastrar: (req, res, next) =>{
		res.render("cadastrar");
	},
	getCurriculo: (req, res) => {
		res.render("curriculo");
	},
	getUsuarioIndex: (req, res) => {
        res.render('usuario')
    },
	postCadastrar: (req, res, next) =>{
		console.log(req.body);
	}
};

module.exports = usuarioController;