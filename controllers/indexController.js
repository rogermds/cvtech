const indexController = {
	getIndex: (req, res) => {
		res.render("index");
	},
	getLogin: (req, res) => {
		res.render("login");
	},
	getCadastrar: (req, res) => {
		res.render("cadastrar");
	},
};

module.exports = indexController;