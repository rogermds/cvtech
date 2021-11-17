const usuarioController = {
	getCurriculo: (req, res) => {
		res.render("curriculo");
	},
	getUsuarioIndex: (req, res) => {
        res.render('usuario')
    }
};

module.exports = usuarioController;